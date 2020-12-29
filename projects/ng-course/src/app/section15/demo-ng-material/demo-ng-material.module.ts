import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import {
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatButtonModule,
  MatChipsModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatDialogModule,
} from '@angular/material';

import { DemoNgRadioComponent } from './demo-ng-radio/demo-ng-radio.component';
import { DemoNgCheckboxComponent } from './demo-ng-checkbox/demo-ng-checkbox.component';
import { DemoNgSelectsComponent } from "./demo-ng-selects/demo-ng-selects.component";
import { DemoNgInputsComponent } from "./demo-ng-inputs/demo-ng-inputs.component";
import { DemoNgChipsComponent } from "./demo-ng-chips/demo-ng-chips.component";
import { DemoNgProgresSpinnersComponent } from "./demo-ng-progresspinners/demo-ng-progresspinners.component";
import { DemoNgTabsComponent } from "./demo-ng-tabs/demo-ng-tabs.component";
import { DemoNgDialogsComponent } from "./demo-ng-dialogs/demo-ng-dialogs.component";

@NgModule({
  declarations: [
    DemoNgRadioComponent,
    DemoNgCheckboxComponent,
    DemoNgSelectsComponent,
    DemoNgInputsComponent,
    DemoNgChipsComponent,
    DemoNgProgresSpinnersComponent,
    DemoNgTabsComponent,
    DemoNgDialogsComponent,
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
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTabsModule,
    MatTooltipModule,
    RouterModule.forChild([
        {
          path: 'section15',
          children: [
            {
              path: 'ngcheckbox',
              component: DemoNgCheckboxComponent
            },
            {
              path: 'ngradio',
              component: DemoNgRadioComponent
            },
            {
              path: 'ngselects',
              component: DemoNgSelectsComponent
            },
            {
              path: 'nginputs',
              component: DemoNgInputsComponent
            },
            {
              path: 'ngchips',
              component: DemoNgChipsComponent
            },
            {
              path: 'ngprogressspinners',
              component: DemoNgProgresSpinnersComponent
            },
            {
              path: 'ngtabs',
              component: DemoNgTabsComponent
            },
            {
              path: 'ngdialogs',
              component: DemoNgDialogsComponent
            }
          ]
        }
      ])
    ],
  exports: [ RouterModule ]
})
export class DemoNgMaterialModule { }
