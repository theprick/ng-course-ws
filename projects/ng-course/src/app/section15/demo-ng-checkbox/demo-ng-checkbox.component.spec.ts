import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgCheckboxComponent } from './demo-ng-checkbox.component';

describe('DemoNgCheckboxComponent', () => {
  let component: DemoNgCheckboxComponent;
  let fixture: ComponentFixture<DemoNgCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNgCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNgCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
