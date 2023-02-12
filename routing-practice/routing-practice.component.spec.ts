import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingPracticeComponent } from './routing-practice.component';

describe('RoutingPracticeComponent', () => {
  let component: RoutingPracticeComponent;
  let fixture: ComponentFixture<RoutingPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
