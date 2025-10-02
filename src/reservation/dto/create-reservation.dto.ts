import { IsDateString, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

class BookingOrFreeDto {
     @IsDateString({}, { message: 'isFree должно быть датой в формате ISO' })
     isFree: Date;
}

export class CreateReservationDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BookingOrFreeDto)
  isBookingorFree: BookingOrFreeDto[];
  room: string;
}