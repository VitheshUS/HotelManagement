import { Room, RoomsEnquiry } from "./rooms";

export function inititlizeEnquiry():RoomsEnquiry{
    const enquiry:RoomsEnquiry={
        totalRooms:30,
        bookedRooms:20,
        availableRooms:5
      }
      return enquiry;
}

// RoomsEnquiry initializer
export function initializeEnquiry(): RoomsEnquiry {
    const enquiry: RoomsEnquiry = {
      totalRooms: 30,
      bookedRooms: 20,
      availableRooms: 5
    };
    return enquiry;
  }
  
 
  export function initializeRoom(): Room {
    const room: Room = {
      roomType: "Deluxe",
      amenities: "WiFi, TV, Mini-bar, AC",
      cost: 5000,
      photo: "deluxe-room.jpg",
      checkIn: new Date(),
      checkout: new Date(new Date().setDate(new Date().getDate() + 1)) // 1-day stay
    };
    return room;
  }
  

  export function initializeRooms(): Room[] {
    const rooms: Room[] = [
      {
        roomType: "Deluxe",
        amenities: "WiFi, TV, Mini-bar, AC",
        cost: 5000,
        photo: "deluxe-room.jpg",
        checkIn: new Date(),
        checkout: new Date(new Date().setDate(new Date().getDate() + 1)) // 1-day stay
      },
      {
        roomType: "Suite",
        amenities: "WiFi, TV, Mini-bar, AC, Jacuzzi",
        cost: 8000,
        photo: "suite-room.jpg",
        checkIn: new Date(),
        checkout: new Date(new Date().setDate(new Date().getDate() + 2)) // 2-day stay
      },
      {
        roomType: "Standard",
        amenities: "WiFi, TV, AC",
        cost: 3000,
        photo: "standard-room.jpg",
        checkIn: new Date(),
        checkout: new Date(new Date().setDate(new Date().getDate() + 1)) // 1-day stay
      }
    ];
    return rooms;
  }