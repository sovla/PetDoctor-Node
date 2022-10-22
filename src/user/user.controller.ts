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
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({
    summary: '전체 유저 조회',
  })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'id 기준 유저 상세 정보',
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Get(':ids')
  @ApiOperation({
    summary: 'ids 기준 유저 정보, ref 값 없이',
  })
  findList(@Param('ids') ids: string[]) {
    return this.userService.findList(ids);
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
  update(@Body() userSchema: UserDocument) {
    return this.userService.update(userSchema as UserDocument);
  }

  @Delete()
  @ApiOperation({
    summary: '유저 정보 삭제/ 삭제시 delete_date 날짜 추가',
  })
  remove(@Body() deleteUserDto: DeleteUseDto) {
    return this.userService.remove(deleteUserDto.id);
  }
}
