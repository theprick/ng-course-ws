import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  categories = [
    { id: 1, name: 'Programming' },
    { id: 2, name: 'Languages' },
    { id: 3, name: 'Arts' }
  ];

  constructor() { }

  submit(x) {
    console.debug(x);
  }
}
