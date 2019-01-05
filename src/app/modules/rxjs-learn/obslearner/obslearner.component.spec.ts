import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObslearnerComponent } from './obslearner.component';

describe('ObslearnerComponent', () => {
  let component: ObslearnerComponent;
  let fixture: ComponentFixture<ObslearnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObslearnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObslearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
