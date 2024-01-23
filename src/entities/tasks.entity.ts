import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  type Relation,
  ManyToMany,
} from "typeorm";
import { User } from "./user.entity";
import { Category } from "./categories.entity";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: "pending", enum: ["pending", "doing", "done"] })
  status: "pending" | "doing" | "done";

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.tasks)
  user: Relation<User>;

  @ManyToMany(() => Category, (category) => category.tasks)
  categories: Relation<Category>[];
}
