import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoomTableComponent } from './view-rooms/room-table/room-table.component';
import { ViewRoomsComponent } from './view-rooms/view-rooms.component';


@NgModule({
  declarations: [
    ViewRoomsComponent,
    RoomTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ViewRoomsComponent
  ]
})
export class RoomsModule { }
