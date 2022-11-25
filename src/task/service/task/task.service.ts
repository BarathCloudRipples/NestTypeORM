import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from 'src/task/entity/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TaskEntity)
        private userRepository: Repository<TaskEntity>
      ){}
      
      create(task: TaskEntity): Promise<TaskEntity> { 
        return this.userRepository.save(task);
      }
    
      findAll(): Promise<TaskEntity[]> {
        return this.userRepository.createQueryBuilder("task")
        .leftJoinAndSelect("task.user", "user")
        .getMany()
      }
    
      findById(id: number): Promise<TaskEntity> {
        return this.userRepository.createQueryBuilder("task")
        .leftJoinAndSelect("task.user", "user")
        .where("task_id = :id", { id })
        .getOne();
      }
      
      async update(task: TaskEntity, id: number): Promise<string> { 
        this.userRepository.createQueryBuilder()
        .update(task)
        .set(task)
        .where("taskId = :id", { id})
        .execute();
        return 'Task:' + id + ' Updated successfully';
      }

      async removeById(id: number): Promise<string> {
        const task: Promise<TaskEntity> = this.userRepository.findOne(id);
        this.userRepository.remove(await task);
        return 'Task:' + id + ' was removed';
      }
}
