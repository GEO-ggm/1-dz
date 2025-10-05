import { IsDateString, ValidateNested, IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class BookingOrFreeDto {
     @IsDateString({}, { message: 'isFree должно быть датой в формате ISO' })
     isFree: Date;
}

export class CreateReservationDto {
  @IsArray({ message: 'isBookingorFree должно быть массивом' })
  @ValidateNested({ each: true })
  @Type(() => BookingOrFreeDto)
  isBookingorFree: BookingOrFreeDto[];
  
  @IsString({ message: 'room должно быть строкой' })
  @IsNotEmpty({ message: 'room не может быть пустым' })
  room: string;
}