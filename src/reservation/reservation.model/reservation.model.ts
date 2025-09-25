import { FindRoomDto } from 'src/rooms/dto/find-room.dto';

export class ReservationModel {
    _id: string;
    isBookingorFree:{
        isFree: Date
    }[];
    room: FindRoomDto
}
