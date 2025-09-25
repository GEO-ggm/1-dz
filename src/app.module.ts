import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [RoomsModule, ReservationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
