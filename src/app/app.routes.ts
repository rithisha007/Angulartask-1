import { Routes } from '@angular/router';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';
import { FlightbookingComponent } from './flightbooking/flightbooking.component';
import { BusbookingComponent } from './busbooking/busbooking.component';
import { CarbookingComponent } from './carbooking/carbooking.component';
import { EmployeetableComponent } from './employeetable/employeetable.component';

export const routes: Routes = [
  {
    path:"Hotel",
    component:HotelbookingComponent
  },
  {
    path:"flight",
    component:FlightbookingComponent
  },
  {
    path:"bus",
    component:BusbookingComponent
  },
  {
    path:"car",
    component:CarbookingComponent
  },
  {
    path:"employee",
    component:EmployeetableComponent
  }
];
