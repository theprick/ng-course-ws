import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // encapsulation: ViewEncapsulation.Emulated,
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') private isFavorite: boolean
  @Output('change') statusChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.statusChange.emit({ 'newValue': this.isFavorite });
  }
}

export interface FavoriteChangedEvent {
  newValue: boolean;
}
