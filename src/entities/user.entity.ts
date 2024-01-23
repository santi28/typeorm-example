import { Entity } from "typeorm";

@Entity()
export class User {
  id: number;

  name: string;
  email: string;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
