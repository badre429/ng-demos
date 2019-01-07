import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesChartComponent } from './employees.component';

describe('EmployeesComponent', () => {
  let component: EmployeesChartComponent;
  let fixture: ComponentFixture<EmployeesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
