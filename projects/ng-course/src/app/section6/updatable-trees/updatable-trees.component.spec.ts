import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatableTreesComponent } from './updatable-trees.component';

describe('UpdatableTreesComponent', () => {
  let component: UpdatableTreesComponent;
  let fixture: ComponentFixture<UpdatableTreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatableTreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatableTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
