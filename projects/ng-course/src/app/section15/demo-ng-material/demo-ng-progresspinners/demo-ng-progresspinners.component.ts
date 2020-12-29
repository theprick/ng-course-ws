import { Component, OnInit } from '@angular/core';
import { Observable, timer } from "rxjs";


@Component({
  selector: 'app-demo-ng-selects',
  templateUrl: './demo-ng-progresspinners.component.html',
  styleUrls: ['./demo-ng-progresspinners.component.css']
})
export class DemoNgProgresSpinnersComponent implements OnInit{

  progress = 0;
  timer;
  //for the second one
  isLoading = false

  ngOnInit(): void {
    this.isLoading = true;

    this.timer = setInterval(() => {
      this.progress ++
      if(this.progress == 100) clearInterval(this.timer)
    }, 30);

    this.getCourses().subscribe( res => this.isLoading = false);

  }

  getCourses(): Observable<any> {
    return timer(3000);
  }
}
