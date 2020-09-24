import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../../common/services/followers.service';
import { Follower } from '../../common/model/follower';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  private followers: Follower[];

  constructor(
    private followerService: FollowersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    combineLatest(this.route.paramMap, this.route.queryParamMap)
      .pipe(
        switchMap(comb => {
          // read params here
          // call the service
          return this.followerService.getAll()
        })
      )
      .subscribe(
        result => this.followers = result
      );
  }

}
