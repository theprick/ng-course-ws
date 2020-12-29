import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgSelectsComponent } from './demo-ng-progresspinners.component';

describe('DemoNgSelectsComponent', () => {
  let component: DemoNgSelectsComponent;
  let fixture: ComponentFixture<DemoNgSelectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNgSelectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNgSelectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
