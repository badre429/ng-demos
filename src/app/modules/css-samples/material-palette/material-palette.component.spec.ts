import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPaletteComponent } from './material-palette.component';

describe('MaterialPaletteComponent', () => {
  let component: MaterialPaletteComponent;
  let fixture: ComponentFixture<MaterialPaletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialPaletteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
