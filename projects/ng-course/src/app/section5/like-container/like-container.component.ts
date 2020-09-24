import { Component, Output, EventEmitter } from '@angular/core';
import { LikedEvent } from '../like/like.component';
import { Observable } from 'rxjs';
import { LikeNotification } from '../likes-watcher/likes-watcher.component';

@Component({
  selector: 'app-like-container',
  templateUrl: './like-container.component.html',
  styleUrls: ['./like-container.component.css']
})
export class LikeContainerComponent {

  notifications: LikeNotification[] = [];

  tweets: Tweet[] = [
    new Tweet("Make America greate again", false, 16),
    new Tweet("Angular 9 is out", true, 190),
    new Tweet("Java 14 is available", false, 17),
  ];

  onLikeChanged(ev: LikedEvent) {
    this.notifications.push(new LikeNotification(ev));
    console.debug("Cautgh event ", ev);
  }
}

export class Tweet {

  constructor(
    public body: string,
    public isLiked: boolean,
    public likesCount: number,
  ) { }
}
