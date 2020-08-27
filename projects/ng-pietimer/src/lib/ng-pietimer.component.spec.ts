import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPietimerComponent } from './ng-pietimer.component';

describe('NgPietimerComponent', () => {
  let component: NgPietimerComponent;
  let fixture: ComponentFixture<NgPietimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPietimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPietimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
