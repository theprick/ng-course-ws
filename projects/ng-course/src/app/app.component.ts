import { Component, OnInit  } from '@angular/core';
import { sections } from './sidebar.content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ng-course';
  sidebarDisplayed = true;
  sections: any;

  constructor() {
  }

  ngOnInit(): void {
    this.sections = sections;
    console.debug('Sections: ',this.sections);
  }

  clickToggleSidebarButton() {
    this.sidebarDisplayed = !this.sidebarDisplayed;
    console.debug('onToggleExpandSidebarButton ' + this.sidebarDisplayed);
  }
}
