import { PharmacyDocument } from './../schemas/pharmacy.schema';
import { CreatePharmacyDto, DeletePharmacyDto } from './dto/pharmacy.dto';

import { PharmacyService } from './pharmacy.service';

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
import { Pharmacy } from 'src/schemas/pharmacy.schema';
import ResponseModel from 'src/config/response.model';

@Controller('Pharmacy')
@ApiTags('약국 관련 API')
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Post()
  @ApiOperation({
    summary: '약국 생성 API',
    description: '약국을 생성한다.',
  })
  @ApiCreatedResponse({ type: Pharmacy })
  async create(@Body() createPharmacyDto: CreatePharmacyDto) {
    return new ResponseModel({
      data: {
        Pharmacy: await this.pharmacyService.create(createPharmacyDto),
      },
      errorCode: 201,
      errorMessage: '',
    }).return();
  }

  @Get()
  @ApiOperation({
    summary: '전체 약국 조회',
  })
  async findAll() {
    return new ResponseModel({
      data: {
        Pharmacy: await this.pharmacyService.findAll(),
      },
      errorCode: 200,
      errorMessage: '',
    }).return();
  }
  @Get('/list')
  @ApiOperation({
    summary: 'ids 기준 약국 정보 리스트, ref 값 없이',
  })
  async findList(@Query('ids') ids: string[]) {
    console.log(ids);
    return new ResponseModel({
      data: {
        Pharmacy: await this.pharmacyService.findList(ids),
      },
      errorCode: 200,
      errorMessage: '',
    }).return();
  }
  @Get(':id')
  @ApiOperation({
    summary: 'id 기준 약국 상세 정보',
  })
  async findOne(@Param('id') id: string) {
    return new ResponseModel({
      data: {
        Pharmacy: await this.pharmacyService.findOne(id),
      },
      errorCode: 200,
      errorMessage: '',
    }).return();
  }

  @Patch()
  @ApiOperation({
    summary: 'Pharmacy 정보 업데이트',
    requestBody: {
      content: {
        Pharmacy: {
          schema: {
            $ref: '#/components/schemas/Pharmacy',
          },
        },
      },
    },
  })
  async update(@Body() PharmacySchema: PharmacyDocument) {
    return new ResponseModel({
      data: {
        Pharmacy: await this.pharmacyService.update(PharmacySchema),
      },
      errorCode: 200,
      errorMessage: '',
    }).return();
  }

  @Delete()
  @ApiOperation({
    summary: '유저 정보 삭제/ 삭제시 delete_date 날짜 추가',
  })
  async remove(@Body() deletePharmacyDto: DeletePharmacyDto) {
    return new ResponseModel({
      data: {
        Pharmacy: await this.pharmacyService.remove(`${deletePharmacyDto.id}`),
      },
      errorCode: 200,
      errorMessage: '',
    }).return();
  }
}
