import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";

@Entity({name: `passports`})
export class Passport {
	@PrimaryColumn()
	id: string;

	@Column()
	series: string;

	@Column()
	number: string;

	@Column()
	giver: string;

	@Column()
	dateIssued: Date;

	@CreateDateColumn({name: `created_at`})
	createdAt: Date;

	@UpdateDateColumn({name: `updated_at`})
	updateAt: Date;
}
