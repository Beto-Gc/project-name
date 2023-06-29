import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCourseDTO } from './dto/create-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  delete(id: string) {
    throw new Error('Method not implemented.');
  }
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do framework NestJS',
      description: 'teste',
      tags: ['node.js', 'nest.js', 'js'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find(
      (course: Course) => course.id === Number(id),
    );

    if (!course) {
      throw new HttpException(
        `Course id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return course;
  }

  create(body: CreateCourseDTO) {
    return { id: 1, ...body };
  }

  update(id: string, updateCourse: any) {
    const indexCourse = this.courses.findIndex((c) => c.id === Number(id));

    this.courses[indexCourse] = updateCourse;
  }

  remove(id: string) {
    const indexCourse = this.courses.findIndex((c) => c.id === Number(id));

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
