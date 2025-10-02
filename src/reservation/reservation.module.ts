import { Module } from '@nestjs/common';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservationModel, Reservation } from './reservation.model/reservation.model';

@Module({
  controllers: [ReservationController],
  providers: [ReservationService],
  imports: [
    MongooseModule.forFeature([{name: ReservationModel.name, schema: Reservation}])
  ],
  
})
export class ReservationModule {}
