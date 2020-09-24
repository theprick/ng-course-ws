import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  followerId: number;
  user: string;
  view;

  ngOnInit() {
    console.debug('GithubProfileComponent -> ngOnInit');

    combineLatest(this.route.paramMap, this.route.queryParamMap)
      .subscribe(obs => {
        this.followerId = +obs[0].get('id');
        console.debug(this.followerId);

        let user = obs[0].get('username');
        this.user = user;

        let view = obs[1].get('view');
        this.view = view;
        console.debug(view);
      });
  }

  back() {
    this.router.navigate(['/section10/followers'], {
      queryParams: {
        fromId: this.followerId,
        fromUser: this.user
      }
    });
  }
}
