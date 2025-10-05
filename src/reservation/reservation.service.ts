import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReservationDoc, ReservationModel } from './reservation.model/reservation.model';
import { Model, set } from 'mongoose';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { RoomDoc, Rooms, RoomsModel } from 'src/rooms/rooms.model/rooms.model';
import { BookingOrFreeDto } from './dto/create-reservation.dto'; 



@Injectable()
export class ReservationService {
    constructor(
        @InjectModel(ReservationModel.name)
        private readonly reservationModel: Model <ReservationDoc>,
        @InjectModel(RoomsModel.name)
        private readonly roomModel: Model<RoomDoc>,
    ){}

    async createReservation(dto: CreateReservationDto){
        const room = await this.roomModel.findOne({numRoom: dto.room}).exec();
        if(!room){
            throw new BadRequestException('Комната не найдена')
        }


        const existingReservation = await this.reservationModel.findOne({
            room:dto.room
        });

        if (existingReservation){
            const hasConflict = await this.checkDateConflict(
                existingReservation.isBookingorFree,
                dto.isBookingorFree
            )
            if (hasConflict){
                throw new BadRequestException('На выбранную дату комната уже забронирована!')
            }
            const updateReservation = await this.reservationModel.findOneAndUpdate(
                {room: dto.room},
                {
                    $push:{
                        isBookingorFree:{
                            $each: dto.isBookingorFree
                        }
                    }
                },
                {new: true},
            );
            return updateReservation;
        }
        
     

        const newReservation = new this.reservationModel({
            ...dto,
            room:dto.room
        });
        return newReservation.save();
    }

    private checkDateConflict(
        existingDates: BookingOrFreeDto[],
        newDates: BookingOrFreeDto[]
    ): boolean {
        const existingDateSet = new Set(
        existingDates.map(item => 
            new Date(item.isFree).toISOString().split('T')[0]
        )
    );
    return newDates.some(newDate => {
        const newDateString = new Date(newDate.isFree).toISOString().split('T')[0];
        return existingDateSet.has(newDateString)
    })
    };


    
   
    async getbyId(id: string):Promise<ReservationDoc | null>{
        return this.reservationModel.findById(id).exec();
    }

    
}

