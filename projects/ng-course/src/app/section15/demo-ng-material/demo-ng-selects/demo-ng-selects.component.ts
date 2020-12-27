import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-ng-selects',
  templateUrl: './demo-ng-selects.component.html',
  styleUrls: ['./demo-ng-selects.component.css']
})
export class DemoNgSelectsComponent {

  colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' },
  ]
}
