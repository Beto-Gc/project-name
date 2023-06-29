import { ApiProperty, OmitType } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CourseDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  @Type(() => Number)
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  @IsString({each: true})
  tags: string[];
}

export class CreateCourseDTO extends OmitType(CourseDTO, ['id']) {}
export class UpdateCourseDTO extends OmitType(CourseDTO, ['id']) {}