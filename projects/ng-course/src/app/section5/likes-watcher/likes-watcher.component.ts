import { Component, Input, OnInit } from '@angular/core';
import { LikedEvent } from '../like/like.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-likes-watcher',
  templateUrl: './likes-watcher.component.html',
  styleUrls: ['./likes-watcher.component.css']
})
export class LikesWatcherComponent {

  @Input() notifications: LikeNotification[] = [];

  constructor(
  ) { }

}

export class LikeNotification {

  tweetContent: string;
  liked: boolean;
  likeCount: number;

  constructor(event: LikedEvent) {
    this.tweetContent = event.content;
    this.liked = event.newLikeStatus;
    this.likeCount = event.newLikesCount;
  }
}
