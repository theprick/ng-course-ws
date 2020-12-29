import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgChipsComponent } from './demo-ng-chips.component';

describe('DemoNgChipsComponent', () => {
  let component: DemoNgChipsComponent;
  let fixture: ComponentFixture<DemoNgChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNgChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNgChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
