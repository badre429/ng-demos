import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNoObsComponent } from './child-no-obs.component';

describe('ChildNoObsComponent', () => {
  let component: ChildNoObsComponent;
  let fixture: ComponentFixture<ChildNoObsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildNoObsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNoObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
