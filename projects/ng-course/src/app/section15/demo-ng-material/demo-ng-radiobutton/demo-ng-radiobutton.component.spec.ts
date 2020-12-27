import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgRadiobuttonComponent } from './demo-ng-radiobutton.component';

describe('DemoNgRadiobuttonComponent', () => {
  let component: DemoNgRadiobuttonComponent;
  let fixture: ComponentFixture<DemoNgRadiobuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNgRadiobuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNgRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
