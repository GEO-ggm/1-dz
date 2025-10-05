import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RoomDoc, RoomsModel } from './rooms.model/rooms.model';
import { Model } from 'mongoose';
import { FindRoomDto } from './dto/find-room.dto';

@Injectable()
export class RoomsService {
    constructor(
    @InjectModel(RoomsModel.name)
    private readonly roomsModel: Model <RoomDoc>,
    ){}

    async add(dto:RoomsModel):Promise<RoomDoc>{
        try {
            const addRoom = new this.roomsModel(dto);
            const savedRoom = await addRoom.save();
            console.log('Done!',savedRoom)
            return savedRoom;
        } 
        catch (error) {
            console.error('Error save:',error);
            throw new HttpException
            ('err_code:',HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    
}