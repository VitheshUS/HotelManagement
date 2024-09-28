import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ViewRoomsComponent } from './view-rooms/view-rooms.component';


@NgModule({
  declarations: [
    ViewRoomsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ViewRoomsComponent
  ]
})
export class RoomsModule { }
