import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hide',
  templateUrl: './hide.component.html'
})
export class HideComponent implements OnInit {
  showDiv = true;
  btnLabel;

  ngOnInit(): void {
    this.updateBtnLabel();
  }

  toggleDiv() {
    this.showDiv = !this.showDiv;
    this.updateBtnLabel();
  }

  updateBtnLabel() {
    this.btnLabel = this.showDiv ? 'Hide' : 'Show';
  }
}
