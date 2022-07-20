import { Client } from './../../client/entity/client.entity';
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity({name: `addresses`})
export class Address {
	@PrimaryColumn()
	id: number;

	@Column({name: `zip_code`, nullable: true})
	zipCode: string;

	@Column({nullable: true})
	country: string;

	@Column({nullable: true})
	region: string;

	@Column({nullable: true})
	city: string;

	@Column({nullable: true})
	street: string;

	@Column({nullable: true})
	house: string;

	@Column({nullable: true})
	apartment: string;

	@OneToMany(() => Client, client => client.address)
	clients: Client[];
	clients: Client[];
	clients: Client[];

	@CreateDateColumn({name: `created_at`})
	createdAt: Date;

	@UpdateDateColumn({name: `updated_at`})
	updatedAt: Date;
}
