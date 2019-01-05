import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildObsComponent } from './child-obs.component';

describe('ChildObsComponent', () => {
  let component: ChildObsComponent;
  let fixture: ComponentFixture<ChildObsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildObsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
