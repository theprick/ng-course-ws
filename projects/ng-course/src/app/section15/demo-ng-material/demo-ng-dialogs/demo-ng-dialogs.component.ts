import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-ng-dialogs',
  templateUrl: './demo-ng-dialogs.component.html',
  styleUrls: ['./demo-ng-dialogs.component.css']
})
export class DemoNgDialogsComponent {

  colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' },
  ]
}
