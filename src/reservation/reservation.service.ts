import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReservationDoc, ReservationModel } from './reservation.model/reservation.model';
import { Model } from 'mongoose';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Injectable()
export class ReservationService {
    constructor(
        @InjectModel(ReservationModel.name)
        private readonly reservationModel: Model <ReservationDoc>,
    ){}
    async reservation(dto: CreateReservationDto): Promise<ReservationDoc> {
        const createdReservation = new this.reservationModel(dto);
        const roomIsExisting = await this.reservationModel.findOne({
            room: dto.room,
            'isBookingorFree.isFree': dto.isBookingorFree[0].isFree,
        });
        if (roomIsExisting){
            throw new BadRequestException('Эта дата уже забронирована')
        }      
        return this.reservationModel.create(dto)
 }
    async getbyId(id: string):Promise<ReservationDoc | null>{
        return this.reservationModel.findById(id).exec();
    }
}
