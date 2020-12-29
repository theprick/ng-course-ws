import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgRadioComponent } from './demo-ng-radio.component';

describe('DemoNgRadioComponent', () => {
  let component: DemoNgRadioComponent;
  let fixture: ComponentFixture<DemoNgRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNgRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNgRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
