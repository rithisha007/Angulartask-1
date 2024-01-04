import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingoptionComponent } from './bookingoption.component';

describe('BookingoptionComponent', () => {
  let component: BookingoptionComponent;
  let fixture: ComponentFixture<BookingoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingoptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
