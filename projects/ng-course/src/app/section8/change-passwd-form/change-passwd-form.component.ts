import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PasswordValidators } from './passwd.validators';

@Component({
  selector: 'app-change-passwd-form',
  templateUrl: './change-passwd-form.component.html',
  styleUrls: ['./change-passwd-form.component.css']
})
export class ChangePasswdFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      oldPasswd: ['', Validators.required, PasswordValidators.checkPassword],
      newPasswd: ['', Validators.required],
      confirmPasswd: ['', [Validators.required, PasswordValidators.matchConfirmPassword]],
    });
  }

  get oldPasswd() {
    return this.form.get('oldPasswd');
  }

  get newPasswd() {
    return this.form.get('newPasswd');
  }

  get confirmPasswd() {
    return this.form.get('confirmPasswd');
  }
}
