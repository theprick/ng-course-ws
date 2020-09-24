import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trees',
  templateUrl: './trees.component.html',
  styleUrls: ['./trees.component.css']
})
export class TreesComponent {

  trees;

  constructor() { }

  loadData() {
    this.trees = [
      { id: 1, name: 'frasin' },
      { id: 2, name: 'tei' },
      { id: 3, name: 'stejar' },
      { id: 4, name: 'fag' },
      { id: 5, name: 'mesteacăn' },
      { id: 6, name: 'salcie plângătoare' },
    ];
  }

  trackData(index, tree) {
    return tree ? tree.id : undefined;
  }
}
