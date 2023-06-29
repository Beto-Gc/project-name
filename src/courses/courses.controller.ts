import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { response } from 'express';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(@Res() response) {
    return response.status(200).send('Listagem de curso');
  }
  @Get(':id')
  findOne(@Param() params) {
    return `Curso #${params.id}`;
  }
  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
    return body;
  }
  @Patch(':id')
  update(@Param('id')id: string, @Body('name') body) {
    return `Atualizacao do curso #${id}`;
  }
  @Delete(':id')
  delete(@Param('id')id: string) {
    return `Exclusão do curso com id #${id}`;
  }
}
