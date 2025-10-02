import { FindRoomDto } from 'src/rooms/dto/find-room.dto';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { CreateReservationDto } from '../dto/create-reservation.dto';

class BookingOrFree {
    @Prop()
    isFree: Date;
}

@Schema()
export class ReservationModel {
    @Prop({type: () => [Date]})
    isBookingorFree:CreateReservationDto[];

    @Prop({type: ()=> FindRoomDto})
    room: FindRoomDto
}

export const Reservation = SchemaFactory.createForClass(ReservationModel);
export type ReservationDoc = ReservationModel & Document;