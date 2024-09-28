export interface RoomsEnquiry{
    totalRooms:number,
    availableRooms:number,
    bookedRooms:number
};

export interface Room{
    roomType:string,
    amenities:string,
    cost:number,
    photo:string,
    checkIn:Date,
    checkout:Date
}