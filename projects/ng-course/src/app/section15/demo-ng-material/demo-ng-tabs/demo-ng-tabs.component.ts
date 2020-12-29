import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-ng-tabs',
  templateUrl: './demo-ng-tabs.component.html',
  styleUrls: ['./demo-ng-tabs.component.css']
})
export class DemoNgTabsComponent {

  colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' },
  ]
}
