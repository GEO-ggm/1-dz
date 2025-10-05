import { IsString, IsNumber, IsOptional, IsArray } from 'class-validator';

export class CreateRoomDto {
  @IsNumber()
  numRoom: number;

  @IsOptional()
  @IsString()
  photoRoom?: string;

  @IsString()
  titleRoom: string;

  @IsString()
  ownerRoom: string;

  @IsArray()
  @IsString({ each: true })
  dignities: string[];
}