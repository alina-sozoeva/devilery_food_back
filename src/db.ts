import { DataSource } from "typeorm";
import { Restaurant } from "./entities";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Restaurant],
  synchronize: true,
});
