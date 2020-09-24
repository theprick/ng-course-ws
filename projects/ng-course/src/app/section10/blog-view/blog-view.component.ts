import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-archive-view',
  templateUrl: './blog-view.component.html',
})
export class BlogArchiveViewComponent implements OnInit {

  year: number;
  month: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.year = +param.get('year');
      this.month = +param.get('month');
    })
  }

  back() {
    this.router.navigate(['/section10/blogs']);
  }
}
