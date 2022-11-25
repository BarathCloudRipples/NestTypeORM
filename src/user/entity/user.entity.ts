import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn({
    name: 'emp_id'
  })
  id: number;

  @Column({
    length: 50,
    name: 'emp_name', 
    nullable: false
  })
  name: string;

  @Column({ 
    length: 50,
    name: 'department', 
    nullable: false 
  })
  department: string;

  @Column({ 
    name: 'salary', 
    nullable: false 
  })
  salary: number;
  
}
