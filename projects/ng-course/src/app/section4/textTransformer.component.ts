import { Component } from '@angular/core';

/*
  all properties of the style object can be found at this link:
   https://www.w3schools.com/jsref/dom_obj_style.asp

  for some unnown reason (keypress.enter) doesn't work  
*/

@Component({
  selector: 'text-transformer',  // selector
  template: `
<p>This represents the second assigment from Section 4 of the 'Agular Course'</p>
<input size="120" type="text" [(ngModel)]="textToBeTransformed" (keyup)="processText()"/><br>
<span>{{transformedText}}</span>
  `// html template
})

export class TextTransformer {
  private textToBeTransformed: String;
  private transformedText: String;

  lowers = new Array('A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At',
    'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With');

  processText() {
    let negLookAhead = "(?!";
    this.lowers.forEach(function (elem) {
      negLookAhead += "\\s";
      negLookAhead += elem.toLowerCase();
      negLookAhead += "\\s";
      negLookAhead += "|"
    });
    negLookAhead = negLookAhead.slice(0, negLookAhead.length - 1);
    negLookAhead += ")";
   
    let pattern = new RegExp("(^\\w{1}|" + negLookAhead + "(\\s\\w+))", "gi");
    console.debug(pattern);
    this.transformedText = this.textToBeTransformed.replace(pattern, this.processToken);
  }

  processToken(str: String) {
    var toUpper = "";
    if (str && str.trim().length > 0) {
      if (str.startsWith(" ")) {
        toUpper = " " + str.charAt(1).toUpperCase() + (str.length > 2 ? str.slice(2) : "");
      } else {
        toUpper = str.charAt(0).toUpperCase() + str.slice(1);
      }
    }
    return toUpper;
  }
}
