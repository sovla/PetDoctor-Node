import { HttpStatusCode } from 'axios';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger/dist';
import { User, UserDocument } from '../schemas/user.schema';
import { CreateUserDto, DeleteUseDto } from './dto/create-user.dto';
import ResponseModel from 'src/config/response.model';

@Controller('user')
@ApiTags('User API')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({
    summary: '유저 생성 API',
    description: '유저를 생성한다.',
  })
  @ApiCreatedResponse({ type: User })
  async create(@Body() createUserDto: CreateUserDto) {
    return new ResponseModel({
      data: {
        User: await this.userService.create(createUserDto),
      },
      errorCode: 201,
      errorMessage: '',
    }).return();
  }

  @Get()
  @ApiOperation({
    summary: '전체 유저 조회',
  })
  async findAll() {
    return new ResponseModel({
      data: {
        User: await this.userService.findAll(),
      },
      errorCode: 200,
      errorMessage: '',
    }).return();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'id 기준 유저 상세 정보',
  })
  async findOne(@Param('id') id: string) {
    return new ResponseModel({
      data: {
        User: await this.userService.findOne(id),
      },
      errorCode: 200,
      errorMessage: '',
    }).return();
  }

  @Get(':ids')
  @ApiOperation({
    summary: 'ids 기준 유저 정보, ref 값 없이',
  })
  async findList(@Param('ids') ids: string[]) {
    return new ResponseModel({
      data: {
        User: await this.userService.findList(ids),
      },
      errorCode: 200,
      errorMessage: '',
    }).return();
  }

  @Patch()
  @ApiOperation({
    summary: 'user 정보 업데이트',
    requestBody: {
      content: {
        User: {
          schema: {
            $ref: '#/components/schemas/User',
          },
        },
      },
    },
  })
  async update(@Body() userSchema: UserDocument) {
    return new ResponseModel({
      data: {
        User: await this.userService.update(userSchema as UserDocument),
      },
      errorCode: 200,
      errorMessage: '',
    }).return();
  }

  @Delete()
  @ApiOperation({
    summary: '유저 정보 삭제/ 삭제시 delete_date 날짜 추가',
  })
  async remove(@Body() deleteUserDto: DeleteUseDto) {
    return new ResponseModel({
      data: {
        User: await this.userService.remove(deleteUserDto.id),
      },
      errorCode: 200,
      errorMessage: '',
    }).return();
  }
}
