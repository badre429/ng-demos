
import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, group, animate } from '@angular/animations';
export class UserInfo {
  inform: string;
  id: number;
  max(): string {
    return this.inform;
  }
}
export class LocalUser {
  constructor() {

  }
  Infos: UserInfo[];
  Name: string;
  Age: number;

}
@Component({
  selector: 'app-material-palette',
  templateUrl: './material-palette.component.html',
  styleUrls: ['./material-palette.component.scss']
})
export class MaterialPaletteComponent implements OnInit {
  selected: string = "mat-red";
  users: LocalUser[] = [];
  colors: string[] = [
    'red',
    'pink',
    'purple',
    'indigo',
    'blue',
    'cyan',
    'teal',
    'green',
    'lime',
    'yellow',
    'amber',
    'orange',
    'brown',
    'grey'

  ];
  subColors: string[] = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    'A100',
    'A200',
    'A400',
    'A700',
  ];


  constructor() { }

  ChangeService() {

  }
  ngOnInit() {
  }

}



