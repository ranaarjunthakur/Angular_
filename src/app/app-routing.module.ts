import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChildHotelComponent } from './components/child-hotel/child-hotel.component';


const routes: Routes = [
  {
    path:'hotel',
    component:ChildHotelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
