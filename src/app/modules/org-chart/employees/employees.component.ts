import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'ng2-org-chart';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesChartComponent implements OnInit {
  constructor() {}
  topEmployee: any = {
    name: 'Janis Martin',
    designation: 'CEO',
    img: './assets/data/img/b.JPG',
    subordinates: [
      {
        name: 'Matthew Wikes',
        designation: 'VP',
        img: './assets/data/img/b.JPG',
        subordinates: [
          {
            name: 'Tina Landry Art Director Art Director Art Director Art Director Art Director',
            designation: 'Budget Analyst',
            subordinates: [
              {
                name: 'Patricia Lyons',
                designation: 'VP',
                img: './assets/data/img/c.JPG',
                subordinates: [
                  {
                    name: 'Dylan Wilson',
                    designation: 'Web Manager',
                    img: './assets/data/img/b.JPG',
                    subordinates: []
                  },
                  {
                    name: 'Deb Curtis',
                    designation: 'Art Director',
                    img: './assets/data/img/c.JPG',
                    subordinates: [
                      {
                        name: 'Patricia Lyons',
                        designation: 'VP',
                        img: './assets/data/img/c.JPG',
                        subordinates: [
                          {
                            name: 'Dylan Wilson',
                            designation: 'Web Manager',
                            img: './assets/data/img/b.JPG',
                            subordinates: []
                          },
                          {
                            name: 'Deb Curtis',
                            designation: 'Art Director',
                            img: './assets/data/img/c.JPG',
                            subordinates: [
                              {
                                name: 'Patricia Lyons',
                                designation: 'VP',
                                img: './assets/data/img/c.JPG',
                                subordinates: [
                                  {
                                    name: 'Dylan Wilson',
                                    designation: 'Web Manager',
                                    img: './assets/data/img/b.JPG',
                                    subordinates: []
                                  },
                                  {
                                    name: 'Deb Curtis Art Director Art Director',
                                    designation: 'Art Director Art Director Art Director Art Director Art Director',
                                    img: './assets/data/img/c.JPG',
                                    subordinates: []
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Patricia Lyons',
        designation: 'VP',
        img: './assets/data/img/c.JPG',
        subordinates: [
          {
            name: 'Dylan Wilson',
            designation: 'Web Manager',
            img: './assets/data/img/b.JPG',
            subordinates: []
          },
          {
            name: 'Deb Curtis',
            designation: 'Art Director',
            img: './assets/data/img/c.JPG',
            subordinates: [
              {
                name: 'Patricia Lyons',
                designation: 'VP',
                img: './assets/data/img/c.JPG',
                subordinates: [
                  {
                    name: 'Dylan Wilson Art Director Art Director Art Director',
                    designation: 'Web Manager',
                    img: './assets/data/img/b.JPG',
                    subordinates: []
                  },
                  {
                    name: 'Deb Art Director Art Director Art Director Curtis',
                    designation: 'Art Director',
                    img: './assets/data/img/c.JPG',
                    subordinates: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Larry Phung',
        designation: 'VP',
        img: './assets/data/img/a.JPG',
        subordinates: []
      }
    ]
  };
  ngOnInit() {}
}
