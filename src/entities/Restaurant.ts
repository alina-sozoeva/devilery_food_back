import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  schedule: string;

  @Column()
  rating: number;
}
