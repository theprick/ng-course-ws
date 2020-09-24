import { Component, OnInit, Input } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { sections } from '../sidebar.content';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  @Input('content') sections: any;
  @Input() hidden: boolean;

  constructor() {
  }

  ngOnInit(): void {
    console.debug('Init sidebar');
  }

  clickSection(id: string) {
    let item = this.get(id);
    item['expanded'] = !item['expanded'];
  }

  isSectionExpanded(id: string) {
    return this.get(id)['expanded'];
  }

  private get(id: string) {
    return this.sections.find(section => section['id'] === id);
  }
}
