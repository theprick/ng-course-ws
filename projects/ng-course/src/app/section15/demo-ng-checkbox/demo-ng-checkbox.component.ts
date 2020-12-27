import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-ng-checkbox',
  templateUrl: './demo-ng-checkbox.component.html',
  styleUrls: ['./demo-ng-checkbox.component.css']
})
export class DemoNgCheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {
    console.log(event);
  }
}
