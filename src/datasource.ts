import { DataSource } from "typeorm";

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME, DB_SYNC, DB_LOGS } =
  process.env;

export const dataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT),

  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,

  synchronize: Boolean(DB_SYNC),
  logging: Boolean(DB_LOGS),
});
