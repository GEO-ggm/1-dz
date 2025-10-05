import { ReservationModel } from 'src/reservation/reservation.model/reservation.model';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { FindRoomDto } from '../dto/find-room.dto';
@Schema()
export class RoomsModel {
    @Prop({required: true})
    numRoom: number;
    @Prop({required: false})
    photoRoom?: string;
    @Prop({required: true})
    titleRoom: string;
    @Prop({required: true})
    ownerRoom: string;
    @Prop({required: true})
    dignities: string[];

}

export const Rooms = SchemaFactory.createForClass(RoomsModel);
export type RoomDoc = RoomsModel  & Document;
