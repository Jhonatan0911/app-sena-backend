import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CreateDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    data: { email?: string, ficha?: string };

    @ApiProperty()
    @IsBoolean()
    status: boolean;

    @ApiProperty()
    @IsDate()
    date: Date;

}