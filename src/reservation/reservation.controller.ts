import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ReservationModel } from './reservation.model/reservation.model';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';


@Controller('reservation')
export class ReservationController {
    constructor(private readonly reservationService: ReservationService) {}
    @HttpCode(200)
        @Get(':id')
        async get(@Param('id') id: string){
            return this.reservationService.getbyId(id)
        }
    
        @Delete(':id')
        async delete (@Param('id')id: string){}
    
        @Post('create')
        async create(@Body() dto: CreateReservationDto){
            return this.reservationService.createReservation(dto)
        }
    
        @Patch('update/:id')
        async update(@Param('id') id:string, @Body() dto: ReservationModel ){}
}
