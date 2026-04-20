import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Restaurant } from "./Restaurant";

@Entity()
export class Food {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  rating: number;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.id)
  restaurant: Restaurant;
}
