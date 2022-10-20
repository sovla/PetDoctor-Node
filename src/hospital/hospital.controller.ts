import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import mongoose from 'mongoose';
import { HospitalService as Hospital } from './hospital.service';

@Controller('hospital')
export class HospitalController {
  constructor(private readonly HospitalService: Hospital) {}

  @Post()
  create(@Body('id') userId: String) {
    return this.HospitalService.create(userId);
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.HospitalService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.HospitalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.HospitalService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.HospitalService.remove(+id);
  }
}
