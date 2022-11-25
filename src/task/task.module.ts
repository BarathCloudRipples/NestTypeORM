import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './controller/task/task.controller';
import { TaskEntity } from './entity/task.entity';
import { TaskService } from './service/task/task.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
