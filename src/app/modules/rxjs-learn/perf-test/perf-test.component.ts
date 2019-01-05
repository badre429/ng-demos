import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-perf-test',
  templateUrl: './perf-test.component.html',
  styleUrls: ['./perf-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerfTestComponent implements OnInit {
  ShowValue = false;
  choices: string[] = [
    'ABC 001',
    'ABC 002',
    'ABC 003',
    'ABC 004',
    'ABC 005',
    'ABC 006',
    'ABC 007',
    'ABC 008',
    'ABC 009',
    'ABC 010',
    'ABC 011',

  ];
  NextRandom(): string {
    const i = Math.floor(Math.random() * 10000) % this.choices.length;
    return this.choices[i];
  }
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      const li = [];
      this.table[i] = li;
      for (let j = 0; j < 15; j++) {
        li[j] = this.NextRandom();
      }
    }
  }
  // tslint:disable-next-line:member-ordering
  table: string[][] = [];
}
