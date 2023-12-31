import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { response } from 'express';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService){}
  @Get()
  findAll() {
    return this.coursesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }
  @Post()
  create(@Body() body) {
    return this.coursesService.create(body);
  }
  @Patch(':id')
  update(@Param('id')id: string, @Body('name') body) {
    return this.coursesService.update(id, body);
  }
  @Delete(':id')
  delete(@Param('id')id: string) {
    return  this.coursesService.delete(id);
  }
}
