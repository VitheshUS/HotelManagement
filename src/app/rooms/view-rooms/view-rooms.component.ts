import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { initializeRooms, inititlizeEnquiry } from '../initializer';
import { Room, RoomsEnquiry } from '../rooms';

@Component({
  selector: 'app-view-rooms',
  templateUrl: './view-rooms.component.html',
  styleUrl: './view-rooms.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ViewRoomsComponent implements OnInit{
  
  enquiry!:RoomsEnquiry;
  roomList!:Room[];

  ngOnInit(): void {
    this.enquiry=inititlizeEnquiry();
    this.roomList=initializeRooms();
  }

  selectedRoom(room: Room) {
    this.roomList=[...this.roomList,room];
    }
}
