import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html'
}) 
export class CoursesListComponent {
  courses = [4, 5];

  addCourse() {
    this.courses.push(10);
  }

  removeCourse() {
    if (this.courses.length > 0) {
      this.courses.pop();
    }
  }
}
