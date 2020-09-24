import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format: string;

  constructor(
    private element: ElementRef,
  ) { }

  @HostListener('blur') onBlur() {
    this.formatText();
  }

  @HostListener('keypress') onKeypress() {
    this.formatText();
  }

  private formatText() {
    let value: string = this.element.nativeElement.value;
    if (this.format === 'lower')
      this.element.nativeElement.value = value.toLowerCase();
    else
      this.element.nativeElement.value = value.toUpperCase();
  }
}
