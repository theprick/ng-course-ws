
import { Component } from '@angular/core';

/*
  all properties of the style object can be found at this link:
   https://www.w3schools.com/jsref/dom_obj_style.asp

  for some unnown reason (keypress.enter) doesn't work  
*/

@Component({
  selector: 'favorites',  // selector
  template: `
<h4>Assigment section 4 using SVGs.</h4>
<svg height="210" width="500">
  <polygon points="100,10 40,198 190,78 10,78 160,198" (click)=toggleFavorite() [class.selected]="favorite"/>
  Sorry, your browser does not support inline SVG.
</svg>
<span class="oi oi-star"></span>
  `// html template
})
  
export class FavoriteSVGComponent {
  private favorite: boolean = false;

  private toggleFavorite() {
    this.favorite = !this.favorite;
    console.debug("toggleFavorite: new value=" + this.favorite);
  }
}
