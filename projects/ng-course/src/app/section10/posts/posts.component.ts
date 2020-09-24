import { Component, OnInit } from '@angular/core';
import { PostService } from '../../common/services/post.service';
import { NotFoundError } from '../../common/model/not-found.error';
import { BadInputError } from '../../common/model/bad-request.error';
import { AppError } from '../../common/model/app.error';
import { Post } from '../../common/model/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  editingId: number;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    console.debug('PostsComponent.ngOnInit()');
    this.getPosts();
  }

  getPosts() {
    this.postService.getAll().subscribe(
      (response: any[]) => {
        this.posts = response;
      }
    );
  }

  addPost(input: HTMLInputElement) {
    if (!input.value)
      return;

    let post = new Post(input.value, true);
    this.postService.create(post).subscribe(
      response => {
        //post['id'] = response['id'];
        this.posts.unshift(post);
        console.debug(post.title);
        input.value = '';
      },
      (error: AppError) => {
        if (error instanceof BadInputError) {
          // this.form.setErrors(error.json());
        } else throw error;
      }
    )
  }

  deletePost(id: number) {
    this.postService.delete(id).subscribe(
      response => {
        let i = this.posts.findIndex(post => post['id'] == id);
        this.posts.splice(i, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('The post has already been deleted');
        } else
          throw error;
      }
    );
  }

  updatePost($event, post: any) {
    // see https://blog.angular-university.io/angular-debugging/
    // see https://medium.com/code-divoire/ng-bootstrap-modalservice-and-expressionchangedafterithasbeencheckederror-7b21cbf6c74a    
    ($event.srcElement as HTMLInputElement).blur();
    this.editingId = undefined;
    this.postService.update(post.id, post).subscribe(
      response => {
        console.debug('new title:' + post.title);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('The post has already been deleted');
        } else
          throw error;
      }
    );
  }

  setEditablePost(post) {
    this.editingId = post.id;
  }
}
