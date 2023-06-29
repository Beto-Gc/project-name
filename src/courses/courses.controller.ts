import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'Listagem de curso';
  }
  @Get(':id')
  findOne(@Param() params) {
    return `Curso #${params.id}`;
  }
}
