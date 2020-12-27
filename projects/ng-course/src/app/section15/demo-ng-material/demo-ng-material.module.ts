import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoNgRadiobuttonComponent } from './demo-ng-radiobutton/demo-ng-radiobutton.component';
import { DemoNgCheckboxComponent } from './demo-ng-checkbox/demo-ng-checkbox.component';
import {DemoNgSelectsComponent} from "./demo-ng-selects/demo-ng-selects.component";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCheckboxModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    DemoNgRadiobuttonComponent,
    DemoNgCheckboxComponent,
    DemoNgSelectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    RouterModule.forChild([
        {
          path: 'section15',
          children: [
            {
              path: 'ngcheckbox',
              component: DemoNgCheckboxComponent
            },
            {
              path: 'ngradiobutton',
              component: DemoNgRadiobuttonComponent
            },
            {
              path: 'ngselects',
              component: DemoNgSelectsComponent
            },
            {
              path: 'nginputs',
              component: DemoNgCheckboxComponent
            },
            {
              path: 'ngtextarea',
              component: DemoNgCheckboxComponent
            },
            {
              path: 'ngdatepicker',
              component: DemoNgCheckboxComponent
            },
            {
              path: 'ngicons',
              component: DemoNgCheckboxComponent
            },
            {
              path: 'ngbuttons',
              component: DemoNgCheckboxComponent
            },
            {
              path: 'ngchips',
              component: DemoNgCheckboxComponent
            },
            {
              path: 'ngprogressspinners',
              component: DemoNgCheckboxComponent
            },
            {
              path: 'ngtooltips',
              component: DemoNgCheckboxComponent
            },
            {
              path: 'ngtabs',
              component: DemoNgCheckboxComponent
            },
            {
              path: 'ngdialogs',
              component: DemoNgCheckboxComponent
            }
          ]
        }
      ])
    ],
  exports: [ RouterModule ]
})
export class DemoNgMaterialModule { }
