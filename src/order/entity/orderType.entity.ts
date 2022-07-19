import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: `order_types`})
export class OrderType {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;
}
