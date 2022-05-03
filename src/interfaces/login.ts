import { ApiProperty, ApiPropertyOptional, ApiTags } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UsersLogin {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string;
}