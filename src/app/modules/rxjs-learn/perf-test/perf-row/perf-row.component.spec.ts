import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfRowComponent } from './perf-row.component';

describe('PerfRowComponent', () => {
  let component: PerfRowComponent;
  let fixture: ComponentFixture<PerfRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
