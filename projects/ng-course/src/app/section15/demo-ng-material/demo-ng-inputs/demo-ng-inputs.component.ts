import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-demo-ng-inputs',
  templateUrl: './demo-ng-inputs.component.html',
  styleUrls: ['./demo-ng-inputs.component.css']
})
export class DemoNgInputsComponent {

  form;

  constructor(fb: FormBuilder) {
    // define a form control with a initial state and a validator
    this.form = fb.group({
      courseName: ['', [Validators.required]],
      courseStartDate: ['', [Validators.required]],
      contact: fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        address: [],
        phone: ['', [Validators.required]],
      })
    });
    /*
    usernameFormControl = new FormControl('', [Validators.required])
    firstNameFormControl = new FormControl('', [Validators.required])
    lastNameFormControl = new FormControl('', [Validators.required])
    cityFormControl = new FormControl('', [Validators.required])
     */
  }

  get courseNameFormControl() {
    return this.form.get('courseName');
  }

  get firstNameFormControl() {
    return this.form.get('contact').get('firstName');
  }

  get lastNameFormControl() {
    return this.form.get('contact').get('lastName')
  }

  get addressFormControl() {
    return this.form.get('contact').get('address')
  }

  get phoneFormControl() {
    return this.form.get('contact').get('phone')
  }
}
