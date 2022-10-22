import {
  CreateHospitalDto,
  DeleteHospitalDto,
} from './dto/create-hospital.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger/dist';
import ResponseModel from 'src/config/response.model';
import { Hospital, HospitalDocument } from 'src/schemas/hospital.schema';
import { HospitalService } from './hospital.service';
import { Request } from 'express';

@Controller('hospital')
@ApiTags('병원 관련 API')
export class HospitalController {
  constructor(private readonly HospitalService: HospitalService) {}

  @Post()
  @ApiOperation({
    summary: '병원 생성 API',
    description: '병원을 생성한다.',
  })
  @ApiCreatedResponse({ type: Hospital })
  async create(@Body() createHospitalDto: CreateHospitalDto) {
    return new ResponseModel({
      data: {
        Hospital: await this.HospitalService.create(createHospitalDto),
      },
      errorCode: 201,
      errorMessage: '',
    }).return();
  }

  @Get()
  @ApiOperation({
    summary: '전체 병원 조회',
  })
  async findAll() {
    return new ResponseModel({
      data: {
        Hospital: await this.HospitalService.findAll(),
      },
      errorCode: 200,
      errorMessage: '',
    }).return();
  }
  @Get('/list')
  @ApiOperation({
    summary: 'ids 기준 병원 정보 리스트, ref 값 없이',
  })
  async findList(@Query('ids') ids: string[]) {
    console.log(ids);
    return new ResponseModel({
      data: {
        Hospital: await this.HospitalService.findList(ids),
      },
      errorCode: 200,
      errorMessage: '',
    }).return();
  }
  @Get(':id')
  @ApiOperation({
    summary: 'id 기준 병원 상세 정보',
  })
  async findOne(@Param('id') id: string) {
    return new ResponseModel({
      data: {
        Hospital: await this.HospitalService.findOne(id),
      },
      errorCode: 200,
      errorMessage: '',
    }).return();
  }

  @Patch()
  @ApiOperation({
    summary: 'Hospital 정보 업데이트',
    requestBody: {
      content: {
        Hospital: {
          schema: {
            $ref: '#/components/schemas/Hospital',
          },
        },
      },
    },
  })
  async update(@Body() hospitalSchema: HospitalDocument) {
    return new ResponseModel({
      data: {
        Hospital: await this.HospitalService.update(hospitalSchema),
      },
      errorCode: 200,
      errorMessage: '',
    }).return();
  }

  @Delete()
  @ApiOperation({
    summary: '유저 정보 삭제/ 삭제시 delete_date 날짜 추가',
  })
  async remove(@Body() deleteHospitalDto: DeleteHospitalDto) {
    return new ResponseModel({
      data: {
        Hospital: await this.HospitalService.remove(`${deleteHospitalDto.id}`),
      },
      errorCode: 200,
      errorMessage: '',
    }).return();
  }
}
