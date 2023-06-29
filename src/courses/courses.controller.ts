import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { response } from 'express';
import { CoursesService } from './courses.service';
import { CourseDTO, CreateCourseDTO, UpdateCourseDTO } from './dto/course.dto';

@Controller('courses')
@ApiTags('Courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}
  @Get()
  findAll() {
    return this.coursesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({ type: CourseDTO })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreateCourseDTO) {
    return this.coursesService.create(body);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: CourseDTO })
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id') id: string,
    @Body('name') updateCourseDTO: UpdateCourseDTO,
  ) {
    return this.coursesService.update(id, updateCourseDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coursesService.delete(id);
  }
}
