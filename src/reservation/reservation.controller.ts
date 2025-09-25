import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ReservationModel } from './reservation.model/reservation.model';


@Controller('reservation')
export class ReservationController {
    @HttpCode(200)
        @Get(':id')
        async get(@Param('id') id: string){}
    
        @Delete(':id')
        async delete (@Param('id')id: string){}
    
        @Post('create')
        async create(@Body() dto:Omit<ReservationModel, '_id'>){}
    
        @Patch('update/:id')
        async update(@Param('id') id:string, @Body() dto:Omit<ReservationModel, '_id'> ){}
}
