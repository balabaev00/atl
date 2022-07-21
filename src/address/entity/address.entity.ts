import {Job} from "./../../job/entity/job.entity";
import {Client} from "./../../client/entity/client.entity";
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
	id: string;

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

	@OneToMany(() => Client, client => client.livingAddress)
	livingClients: Client[];

	@OneToMany(() => Client, client => client.regAddress)
	regClients: Client[];

	@OneToMany(() => Job, job => job.factAddress)
	factJobs: Job[];

	@OneToMany(() => Job, job => job.jurAddress)
	jurJobs: Job[];

	@CreateDateColumn({name: `created_at`})
	createdAt: Date;

	@UpdateDateColumn({name: `updated_at`})
	updatedAt: Date;
}
