import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './../../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ){}
  
  create(user: UserEntity): Promise<UserEntity> { 
    return this.userRepository.save(user);
  }

  findAll(limit: number, offset: number): Promise<UserEntity[]> {
    return this.userRepository.createQueryBuilder("user")
    .take(limit)
    .skip(offset)
    .getMany();
  }

  findById(id: number): Promise<UserEntity> {
    return this.userRepository.findOne(id);
  }

  async update(user: UserEntity, id: number): Promise<string> { 
    this.userRepository.createQueryBuilder()
    .update(user)
    .set(user)
    .where("id = :id", { id})
    .execute();
    return 'User:' + id + ' Updated successfully';
  }

  async removeById(id: number): Promise<string> {
    const user: Promise<UserEntity> = this.userRepository.findOne(id);
    this.userRepository.remove(await user);
    return 'User:' + id + ' was removed';
  }
}