import { UserEntity } from "src/user/entity/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('task')
export class TaskEntity {
  @PrimaryGeneratedColumn({
    name: 'task_id'
  })
  taskId: number;

  @Column({
    length: 50,
    name: 'title'
  })
  title: string;

  @Column({ 
    length: 50,
    name: 'description'
  })
  description: string;

  @Column({ 
    length: 50,
    name: 'status'
  })
  status: string;

  @CreateDateColumn({ 
    name: "created_at",
    type: "timestamp", 
    default: () => "CURRENT_TIMESTAMP(6)" 
  })
  createdAt: Date;

  @Column({ 
    length: 50,
    name: 'assign_to'
  })
  assignTo: string;
  
  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn()
    user: UserEntity
}