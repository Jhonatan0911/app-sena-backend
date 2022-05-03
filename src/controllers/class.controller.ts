import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateDto } from '../dtos/dto.dto';
import { ClassService } from '../services/class.service';
import { Array } from '../interfaces/array';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Class')
@Controller('class')
export class ClassController {
  constructor(private service: ClassService) { }

  @Get()
  getAll(): Promise<Array[]> {
    return this.service.getAll();
  }

  @Get('user/:uid')
  getHistoryUser(@Param('uid') itemId: string) {
    return this.service.getUserFicha(itemId);
  }

  @Get(':id')
  get(@Param('id') classId: string) {
    return this.service.get(classId);
  }

  @Post()
  create(@Body() user: CreateDto): Promise<Array> {
    return this.service.create(user);
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