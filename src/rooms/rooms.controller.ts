import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';

import { RoomsModel } from './rooms.model/rooms.model';
import { UpdateRoomDto } from './dto/update-room.dto';

@Controller('rooms')
export class RoomsController {
    @HttpCode(200)
    @Get(':id')
    async get(@Param('id') id: string){}

    @Delete(':id')
    async delete (@Param('id')id: string){}

    @Post('create')
    async create(@Body() dto: Omit<RoomsModel, '_id'> ){}

    @Patch('update/:id')
    async update(@Param('id') id:string, @Body() dto:UpdateRoomDto ){}
}
