import { NgOrganizationChartNodeModel } from './ng-organization-chart-node-model';
import { NgOrganizationChartNodeComponent } from './ng-organization-chart-node/ng-organization-chart-node.component';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Output,
  EventEmitter
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-organization-chart',
  templateUrl: './ng-organization-chart.component.html',
  styleUrls: ['./ng-organization-chart.component.css']
})
export class NgOrganizationChartComponent implements OnInit {
  paneTransform = {};
  private paneDragging = false;
  private zoom = 1;
  private paneX = 0;
  private paneY = 0;

  @Input() data: Array<NgOrganizationChartNodeModel> = [];
  @Input() remoteData = false;
  @Output() onClickNode: EventEmitter<
    NgOrganizationChartNodeModel
  > = new EventEmitter();
  @Output() onDragNode: EventEmitter<any> = new EventEmitter();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  onClickDeepNode(node) {
    this.onClickNode.emit(node);
  }

  onDragDeepNode(transfer) {
    this.onDragNode.emit(transfer);
  }

  public onmousedown(event) {
    this.paneDragging = true;
  }

  public onmousemove(event) {
    if (this.paneDragging) {
      const { movementX, movementY } = event;
      this.paneX += movementX;
      this.paneY += movementY;
      this.makeTransform();
    }
  }

  public onmouseup() {
    this.paneDragging = false;
  }

  public makeTransform() {
    this.paneTransform = this.sanitizer.bypassSecurityTrustStyle(
      `translate(${this.paneX}px, ${this.paneY}px) scale(${this.zoom})`
    );
  }

  public preventMouse(event) {
    event.stopPropagation();
  }

  public onmousewheel(event) {
    let delta;
    event.preventDefault();
    delta = event.detail || event.wheelDelta;
    this.zoom += delta / 1000 / 2;
    this.zoom = Math.min(Math.max(this.zoom, 0.2), 3);
    this.makeTransform();
  }
}
