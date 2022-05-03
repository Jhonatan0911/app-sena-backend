import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateDto } from '../dtos/dto.dto';
import { UsersService } from '../services/users.service';
import { Array } from '../interfaces/array';
import { ApiTags } from '@nestjs/swagger';
import { UsersLogin } from '../interfaces/login';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private service: UsersService) { }

  @Get()
  getAll(): Promise<Array[]> {
    return this.service.getAll();
  }

  @Get(':id')
  get(@Param('id') userId: string) {
    return this.service.get(userId);
  }

  @Get('ficha/:uid')
  getHistoryUser(@Param('uid') fichaId: string) {
    return this.service.getUserFicha(fichaId);
  }

  @Post()
  create(@Body() user: CreateDto): Promise<Array> {
    return this.service.create(user);
  }

  @Post("/login")
  login(@Body() data: UsersLogin) {
    return this.service.login(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }

}