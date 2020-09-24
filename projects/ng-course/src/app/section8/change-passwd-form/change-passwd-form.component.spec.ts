import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswdFormComponent } from './change-passwd-form.component';

describe('ChangePasswdFormComponent', () => {
  let component: ChangePasswdFormComponent;
  let fixture: ComponentFixture<ChangePasswdFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswdFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
