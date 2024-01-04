import { Component } from '@angular/core';
import { HotelbookingComponent } from '../hotelbooking/hotelbooking.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bookingoption',
  standalone: true,
  imports: [HotelbookingComponent,RouterOutlet,RouterLink],
  templateUrl: './bookingoption.component.html',
  styleUrl: './bookingoption.component.css'
})
export class BookingoptionComponent {
  constructor(){

  }
}
