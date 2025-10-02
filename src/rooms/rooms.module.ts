import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomsModel, RoomDoc, Rooms } from './rooms.model/rooms.model';

@Module({
  controllers: [RoomsController],
  providers: [RoomsService],
  imports: [
    MongooseModule.forFeature([{name: RoomsModel.name, schema: Rooms}])]
})
export class RoomsModule {}
