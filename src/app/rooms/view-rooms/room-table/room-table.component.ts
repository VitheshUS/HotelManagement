import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../../rooms';

@Component({
  selector: 'app-room-table',
  templateUrl: './room-table.component.html',
  styleUrl: './room-table.component.scss'
})
export class RoomTableComponent {

    @Input() rooms!:Room[];

    @Output() selectedRoom=new EventEmitter<Room>();

    RoomSelected(room:Room){
      this.selectedRoom.emit(room);
    }

}
