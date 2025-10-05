import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';

import { RoomsModel } from './rooms.model/rooms.model';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';

@Controller('rooms')
export class RoomsController {
    constructor(private readonly roomService: RoomsService){}
    @HttpCode(200)
    @Get(':id')
    async get(@Param('id') id: string){}

    @Delete(':id')
    async delete (@Param('id')id: string){}

    @Post('create')
    async create(@Body() dto: CreateRoomDto ){
        return this.roomService.add(dto);
    }

    @Patch('update/:id')
    async update(@Param('id') id:string, @Body() dto:UpdateRoomDto ){}
}
