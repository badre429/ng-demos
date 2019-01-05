import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { MatRipple } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: '[perf-row]',
  templateUrl: './perf-row.component.html',
  styleUrls: ['./perf-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerfRowComponent implements OnInit {
  @ViewChild(MatRipple) ripple: MatRipple;
  @Input()
  row: string[];
  @Input()
  choices: string[];
  @Input()
  index = 0;
  @Input()
  public set ShowValue(val: boolean) {
    this._ShowValue = val;
    //  console.log(this.index);
    this.ShowValue$.next(this._ShowValue);
    // setTimeout(() => {
    //   this.ShowValue$.next(this._ShowValue);
    //   console.log(this.index);
    //   if (this.ripple) {
    //      var persistent = false;
    //      this.ripple.launch(0, 0, { centered: true, persistent });
    //     }
    // }, this.index * 3000);
  }
  public get ShowValue(): boolean {
    return this._ShowValue;
  }
  _ShowValue: boolean;
  ShowValue$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}

  ngOnInit() {}
}
