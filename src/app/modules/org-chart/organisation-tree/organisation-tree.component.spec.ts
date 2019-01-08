import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationTreeComponent } from './organisation-tree.component';

describe('OrganisationTreeComponent', () => {
  let component: OrganisationTreeComponent;
  let fixture: ComponentFixture<OrganisationTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
