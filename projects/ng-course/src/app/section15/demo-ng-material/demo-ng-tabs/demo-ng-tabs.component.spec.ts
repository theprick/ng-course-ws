import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgTabsComponent } from './demo-ng-tabs.component';

describe('DemoNgTabsComponent', () => {
  let component: DemoNgTabsComponent;
  let fixture: ComponentFixture<DemoNgTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNgTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNgTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
