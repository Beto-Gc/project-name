import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  delete(id: string) {
    throw new Error('Method not implemented.');
  }
    private courses: Course[] = [
        {
            id:1,
            name:"Fundamentos do framework NestJS",
            description:"teste",
            tags: ['node.js','nest.js','js'],
        }];

        findAll(){
            return this.courses;
        }

        findOne(id:string){
            return this.courses.find((course:Course)=>course.id === Number(id));
        }

        create(createCourseDto: any){
            this.courses.push(createCourseDto);
        }

        update(id:string, updateCourse: any){
            const indexCourse = this.courses.findIndex(c => c.id === Number(id));

            this.courses[indexCourse] = updateCourse;
        }

        remove(id:string){            
            const indexCourse = this.courses.findIndex(c => c.id === Number(id));

            if (indexCourse >= 0) {
                this.courses.splice(indexCourse, 1);
            }
        }
}

