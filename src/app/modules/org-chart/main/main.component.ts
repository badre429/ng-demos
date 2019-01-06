import { Component, OnInit } from '@angular/core';
import { NgOrganizationChartHelper } from '../ng-organization-chart/ng-organization-chart-helper';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data = [
    {
      id: 'Neo',
      children: [
        {
          id: 'Diogo',
          children: [
            {
              id: 'Higor',
              children: [
                {
                  id: 'Angular',
                  children: []
                },
                {
                  id: 'CSS',
                  children: []
                },
                {
                  id: 'HTML',
                  children: []
                },
                {
                  id: 'Piadas sem graça',
                  children: []
                }
              ]
            },
            {
              id: 'Edson',
              children: [
                {
                  id: 'PHP',
                  children: []
                },
                {
                  id: 'Amazon AWS',
                  children: []
                }
              ]
            },
            {
              id: 'Karen',
              children: [
                {
                  id: 'Litrão',
                  children: []
                },
                {
                  id: 'Balada',
                  children: [
                    {
                      id: 'Terraço Club',
                      children: []
                    }
                  ]
                },
                {
                  id: 'Happy Hour',
                  children: [
                    {
                      id: 'Risca faca',
                      children: []
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
      id: 'scond organisation',
      children: [{ id: 'test', children: [] }, { id: 'my', children: [] }]
    }
  ];

  clickNode(node) {
    alert('Node  "' + node.id + '"  was clicked!');
  }

  dragNode(transfer) {
    const helper = new NgOrganizationChartHelper(this.data);
    helper.moveNode(transfer.node.id, transfer.destination.id);
    const data = helper.getData();
    this.data = data;
  }
  ngOnInit(): void {}
}
