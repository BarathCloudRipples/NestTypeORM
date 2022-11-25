import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { TaskService } from 'src/task/service/task/task.service';
import { TaskEntity } from 'src/task/entity/task.entity';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService){}

  @Post()
  create(@Body() task: TaskEntity): Promise<TaskEntity> {
    return this.taskService.create(task);
  }

  @Get()
  async findAll(): Promise<TaskEntity[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<TaskEntity> {
    return this.taskService.findById(id);
  }

  @Put(':id')
  async updateById(@Body() task: TaskEntity, @Param('id') id: number): Promise<string> {
    return this.taskService.update(task, id);
  }

  @Delete(':id')
  async removeById(@Param('id') id: number): Promise<string>  {
    return this.taskService.removeById(id);
  }
}
