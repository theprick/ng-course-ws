import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-view',
  templateUrl: './tabs-view.component.html',
  styleUrls: ['./tabs-view.component.css']
})
export class TabsViewComponent {
  viewMode = 'something';

  changeViewMode(mode) {
    this.viewMode = mode;
  }
}
