import {Component, OnInit} from '@angular/core';
import {CourseDetailsComponent} from "../course-details/course-details.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-demo-ng-dialogs',
  templateUrl: './demo-ng-dialogs.component.html',
  styleUrls: ['./demo-ng-dialogs.component.css']
})
export class DemoNgDialogsComponent implements OnInit{

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog(event) {
    this.dialog.open(CourseDetailsComponent, {
      data: { id: 1, name: "Angular", description: "A course about angular."}
    })
      .afterClosed()
      .subscribe(res => console.debug(res));
  }
}
