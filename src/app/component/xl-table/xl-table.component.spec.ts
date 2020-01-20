import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XlTableComponent } from './xl-table.component';

describe('XlTableComponent', () => {
  let component: XlTableComponent;
  let fixture: ComponentFixture<XlTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XlTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XlTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
