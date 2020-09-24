import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('selected') private isLiked: boolean;
  @Input('likesCount') likesCount: number = 100;
  @Input('content') content;

  @Output('change') change: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  togglelike() {
    let oldLikeStatus = this.isLiked;
    let oldLikesCount = this.likesCount;

    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likesCount++;
    } else {
      this.likesCount--;
    }

    this.change.emit({
      content: this.content,
      newLikeStatus: this.isLiked,
      oldLikeStatus: oldLikeStatus,
      newLikesCount: this.likesCount,
      oldLikesCount: oldLikesCount,
    });
  }
}

export interface LikedEvent {
  content: string,
  newLikeStatus: boolean;
  oldLikeStatus: boolean;
  newLikesCount: number;
  oldLikesCount: number;
}
