import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo2ChildComponent } from './demo2-child.component';

describe('Demo2ChildComponent', () => {
  let component: Demo2ChildComponent;
  let fixture: ComponentFixture<Demo2ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo2ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo2ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
