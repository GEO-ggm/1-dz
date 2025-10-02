import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
import { ReservationModule } from './reservation/reservation.module';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    RoomsModule, ReservationModule, ConfigModule.forRoot(),
    MongooseModule.forRootAsync({imports: [ConfigModule],  useFactory: async (configService: ConfigService) => ({
      uri: configService.get<string>('MONGODB_URI'),
    }),
  inject: [ConfigService]
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
