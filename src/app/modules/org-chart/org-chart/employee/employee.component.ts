import { Component, Input } from '@angular/core';
import { IEmployee } from '../employee';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'oc-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  @Input() employee: IEmployee;
  @Input() hasManager = false;
}
