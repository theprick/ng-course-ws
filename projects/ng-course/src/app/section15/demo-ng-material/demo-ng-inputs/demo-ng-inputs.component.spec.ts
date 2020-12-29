import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgInputsComponent } from './demo-ng-inputs.component';

describe('DemoNgInputsComponent', () => {
  let component: DemoNgInputsComponent;
  let fixture: ComponentFixture<DemoNgInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNgInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNgInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
