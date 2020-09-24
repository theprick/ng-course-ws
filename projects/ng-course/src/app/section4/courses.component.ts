
import { Component } from '@angular/core';

@Component({
  selector: 'courses',  // selector
  template: `
<p>Example of interpolation with curly brackets to display dynamic content.</p>
<p>
  <code ngNonBindable><b>Snippet:</b><br/>
    &lt;h2&gt;{{title}}&lt;/h2&gt;
  </code>
</p>
<h2>{{title}}</h2>

<hr/>
<hr/>

<p>Same result using property binding.</p>
<p>
  <code ngNonBindable><b>Snippet:</b><br/>
    &lt;h2 [textContent]="title"&gt;&lt;/h2&gt;
  </code>
</p>
<h2 [textContent]="title"></h2>

<hr/>
<hr/>

<p>Image displayed using interpolation</p>
<p>
  <code ngNonBindable><b>Snippet:</b><br/>
    &lt;img src = "{{ imageUrl }}"/&gt;
  </code>
</p>
<p>
  <img src = "{{ imageUrl }}"/>
</p>

<hr/>
<hr/>

<p>Set colspan to a table set through property binding</p>
<p>
  <code ngNonBindable><b>Snippet:</b><br/>
    &lt;table border=1&gt;
    &lt;tr&gt;
      &lt;td [attr.colspan]=colspan&gt;aaa&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;bbb&lt;/td&gt;&lt;td&gt;ccc&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/table&gt;
  </code>
</p>
<table border=1>
  <tr>
    <td [attr.colspan]=colspan>aaa</td>
  </tr>
  <tr>
    <td>bbb</td><td>ccc</td>
  </tr>
</table>

<hr/>
<hr/>

<p>
  <b>Class binding: </b> use Inspect DOM element to check if the <b>class</b> is added to the button based on the isActive field's value
</p>
<p>
  <code ngNonBindable><b>Snippet from template:</b><br/>
    &lt;button class="btn btn-primary" [class.active]=isActive&gt;Save&lt;/button&gt;<br/>
  </code>
</p>
<p>
  <code ngNonBindable><b>Snippet from typescript component:</b><br/>
  isActive = true;</code>
</p>
<p>
  <button class="btn btn-primary" [class.active]=isActive>Save</button>&nbsp;
  <input id="checkbox1" name="checkbox1" type="checkbox" (click)="applyBtnClass()">
  <label for="checkbox1">Click to change css class </label>
</p>

<hr/>
<hr/>

<p>
  <b>Style binding: </b> use Inspect DOM element to check if the <b>style binding</b> is added to the button using style binding
</p>
<p>
  <code ngNonBindable><b>Snippet:</b><br/>
    &lt;button class="btn btn-primary" [style.backgroundColor]="isBlue?'blue':'red'"&gt;Cancel&lt;/button&gt;
  </code>
</p>
<p>
  <button class="btn btn-primary" [style.backgroundColor]="isBlue?'blue':'red'">Cancel</button>
  <input id="checkbox2" name="checkbox2" type="checkbox" (click)="switchBtnStyle()">
  <label for="checkbox2">Click to change css style</label>
</p>

<hr/>
<hr/>

<p>
  Define a template variable called 'email' that will be passed to 'onKeyUp' function defined in the class when the any key is pressed
</p>
<p>
  <code ngNonBindable><b>Snippet:</b><br/>
  ...<br/>
  onKeyUp(value) &#123;<br/>
    console.log("Email value " + value);<br/>
  &#125;<br/>
  ...<br/>
  &lt;input&nbsp;#userEmail&nbsp;(keyup.enter)=&quot;onKeyUp(userEmail.value)&quot;&gt;    
  </code>
</p>
<input #userEmail (keyup.enter)="onKeyUp(userEmail.value)" />

<hr/>
<hr/>

<p>
  Event BUBLING: Based on the checkbox state the click event is propagated allong the DOM from the button to the parent DIV.
</p>
<p>
  <code ngNonBindable><b>Snippet from template:</b><br/>
    &lt;input type="checkbox" checked="true" (click)="togglePropagation()"/&gt; Enable event bubling
    &lt;div (click)="handleDivClick()"&gt;
      &lt;button class="btn btn-primary" (click)="handleSave($event)"&gt;ClickMe!&lt;/button&gt;
    &lt;/div&gt;
  </code>
</p>
<p>
  <code ngNonBindable><b>Snippet from typescript class:</b><br/>
    ...<br/>
    enableBubling = true;<br/>
    ...<br/>
    handleSave($event) &#123;<br/>
    &nbsp;// this is the way to stop event bubling(propagation)<br/>
    &nbsp;if (!this.enableBubling) &#123;<br/>
    &nbsp;&nbsp;$event.stopPropagation();<br/>
    &nbsp;&#125;<br/>
     &nbsp;console.log("Save button clicked", $event);<br/>
    &#125;<br/>
<br/>
    handleDivClick() &#123;<br/>
    &nbsp;console.log("Div element clicked");<br/>
    &#125;<br/>
    ...
  </code>
</p>

<input type="checkbox" checked="true" (click)="togglePropagation()"/> Enable event bubling
<div (click)="handleDivClick()">
  <button class="btn btn-primary" (click)="handleSave($event)">ClickMe!</button>
</div>

<hr/>
<hr/>

<p>
  Listen to specific events. When ENTER key is pressed a message is printed in the console.<br/>
  Use one way biding to display the value of the email field in the input. <br/>
  But the new value is NOT reflected in the console. See the next example for the fix.
</p>
<p>
  <code ngNonBindable><b>Snippet from template:</b><br/>
   &lt;input type="text" [value]="email"
        (keypress.enter)="onEnterKeyPressed()"
        (keyup.enter)="onEnterKeyPressed()"/&gt;<br/>
  </code>
  <code ngNonBindable><b>Snippet from typescript class:</b><br/>
  ...<br/>
  email = "me@example.com";<br/>
  ...<br/>
  onEnterKeyPressed() &#123;<br/>
  &nbsp;console.log("Email value " + this.email);<br/>
  &#125;<br/>
  </code>
</p>
Email <input type="text" [value]="email"
        (keypress.enter)="onEnterKeyPressed()"
        (keyup.enter)="onEnterKeyPressed()"/>

<hr/>
<hr/>

<p>
  Example of two way binding using "banana-in-a-box-notation", "[()]". This time the message displayed in the console on ENTER key pressed read from the email field.
</p>
<p>
  <code ngNonBindable>
  <b>UGLY WAY implementation:</b><br/>
  <b>Snippet from template:</b><br/>
   &lt;input type="text" [value]="email" (keyup.enter)="email=$event.target.value; onEnterKeyPressed();"/&gt;<br/>
  </code>
  <code ngNonBindable><b>Snippet from typescript class:</b><br/>
  ...<br/>
  email = "me@example.com";<br/>
  ...<br/>
  onEnterKeyPressed() &#123;<br/>
  &nbsp;console.log("Email value " + this.email);<br/>
  &#125;<br/>
  </code>
</p>
Email <input type="text" [value]="email" (keyup.enter)="email=$event.target.value; onEnterKeyPressed();"/><br/>
<br/>
<p>
  <code ngNonBindable>
  <b>PROPPER WAY implementation:</b><br/>
  <b>Snippet from template:</b><br/>
   &lt;input type="text" [(ngModel)]="email" (keyup.enter)="onEnterKeyPressed()"/&gt;<br/>
  </code>
  <code ngNonBindable><b>Snippet from typescript class:</b><br/>
  ...<br/>
  email = "me@example.com";<br/>
  ...<br/>
  onEnterKeyPressed() &#123;<br/>
  &nbsp;console.log("Email value " + this.email);<br/>
  &#125;<br/>
  </code>
</p>

Email: <input type="text" [(ngModel)]="email" (keyup.enter)="onEnterKeyPressed()"/>

<hr/>
<hr/>

<p><b>Usefull links</b></p>
<ol>
  <li>
    <a href="https://www.w3schools.com/jsref/dom_obj_style.asp">The DOM style object</a>
  </li>
</ol>

  `// html template
})
  
export class CoursesComponent {
  title = "List of courses";
  imageUrl = "http://lorempixel.com/400/200/";
  colspan = 2;
  isBlue = true;
  isActive = true;
  enableBubling = true;
  email = "me@example.com";

  onEnterKeyPressed() {
    console.log("Email value " + this.email);
  }

  onKeyUp(value) {
    console.log("Email value " + value);
  }

  handleSave($event) {
    // this is the way to stop event bubling(propagation)
    if (!this.enableBubling) {
      $event.stopPropagation();
    }
    console.log("Save button clicked", $event);
  }

  handleDivClick() {
    console.log("Div element clicked");
  }

  togglePropagation() {
    this.enableBubling = !this.enableBubling;
  }

  applyBtnClass() {
    this.isActive = !this.isActive;
  }

  switchBtnStyle() {
    this.isBlue = !this.isBlue;
  }
}
