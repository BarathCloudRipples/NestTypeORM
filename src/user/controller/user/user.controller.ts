import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { UserEntity } from 'src/user/entity/user.entity';
import { UserService } from 'src/user/service/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService){}

  @Post()
  create(@Body() user: UserEntity): Promise<UserEntity> {
    return this.userService.create(user);
  }

  @Get('preview/limit=:l&offset=:o')
  async findAll(@Param() params): Promise<UserEntity[]> {
    return this.userService.findAll(params.l, params.o);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<UserEntity> {
    return this.userService.findById(id);
  }

  @Put(':id')
  async updateById(@Body() user: UserEntity, @Param('id') id: number): Promise<string> {
    return this.userService.update(user, id);
  }

  @Delete(':id')
  async removeById(@Param('id') id: number): Promise<string>  {
    return this.userService.removeById(id);
  }
}
