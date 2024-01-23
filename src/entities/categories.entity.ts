import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  type Relation,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Task } from "./tasks.entity";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;

  @ManyToMany(() => Task, (task) => task.categories)
  @JoinTable()
  tasks: Relation<Task>[];
}
