import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-ng-selects',
  templateUrl: './demo-ng-chips.component.html',
  styleUrls: ['./demo-ng-chips.component.css']
})
export class DemoNgChipsComponent implements OnInit {

  categories =[
    { level:1, name: 'beginner', selected: false },
    { level:2, name: 'intermediate', selected: false },
    { level:3, name: 'advanced', selected:false },
  ]

  ngOnInit(): void {
  }
}
