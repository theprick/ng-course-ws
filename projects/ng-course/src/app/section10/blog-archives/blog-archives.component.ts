import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-archives',
  templateUrl: './blog-archives.component.html',
})
export class BlogArchivesComponent {

  archives = [
    {
      'year': 2019,
      'month': 12
    },
    {
      'year': 2019,
      'month': 11
    },
    {
      'year': 2019,
      'month': 10
    }
  ];

}
