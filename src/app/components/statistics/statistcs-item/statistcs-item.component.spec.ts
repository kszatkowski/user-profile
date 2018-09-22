import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistcsItemComponent } from './statistcs-item.component';

describe('StatistcsItemComponent', () => {
  let component: StatistcsItemComponent;
  let fixture: ComponentFixture<StatistcsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistcsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistcsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
