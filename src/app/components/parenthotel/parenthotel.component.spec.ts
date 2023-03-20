import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenthotelComponent } from './parenthotel.component';

describe('ParenthotelComponent', () => {
  let component: ParenthotelComponent;
  let fixture: ComponentFixture<ParenthotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParenthotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenthotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
