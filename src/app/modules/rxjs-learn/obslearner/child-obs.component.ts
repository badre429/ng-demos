
import {
  Component, OnInit, ChangeDetectionStrategy, AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-child-obs',
  templateUrl: './child-obs.component.html',
  styleUrls: ['./child-obs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildObsComponent implements OnInit, AfterViewInit {
  Count$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  Count = 0;
  ngAfterViewInit(): void {
    this.chRef.checkNoChanges();
  }


  CountNext(new_count: number) {
    this.Count = new_count;
    this.Count$.next(new_count + 1);
  }
  constructor(
    private chRef: ChangeDetectorRef
  ) {
    this.Count$.subscribe(o => console.log(o));
  }

  ngOnInit() {
  }

}
