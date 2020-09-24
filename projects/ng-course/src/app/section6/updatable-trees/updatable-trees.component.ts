import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatable-trees',
  templateUrl: './updatable-trees.component.html',
  styleUrls: ['./updatable-trees.component.css']
})
export class UpdatableTreesComponent implements OnInit {

  trees = [
    { id: 1, name: 'frasin' },
    { id: 2, name: 'tei' },
    { id: 3, name: 'stejar' },
    { id: 4, name: 'fag' },
    { id: 5, name: 'mesteacăn' },
    { id: 6, name: 'salcie plângătoare' }
  ];

  constructor() { }

  ngOnInit() {
  }

  addTree() {
    this.trees.push({id: 10, name: 'plop'});
  }

  removeTree(tree) {
    let i = this.trees.indexOf(tree);
    this.trees.splice(i, 1);
  }

  updateTree(tree) {
    tree.name = 'Updated';
  }
}
