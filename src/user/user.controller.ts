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
import { User, UserDocument, UserSchema } from '../schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

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
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Get(':ids')
  findList(@Param('ids') ids: string[]) {
    return this.userService.findList(ids);
  }

  @Patch()
  update(@Body() userSchema: UserDocument) {
    return this.userService.update(userSchema);
  }

  @Delete()
  remove(@Body('id') id: string) {
    return this.userService.remove(id);
  }
}
