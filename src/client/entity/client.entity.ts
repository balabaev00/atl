import {Child} from "./../../child/entity/child.entity";
import {Address} from "./../../address/entity/address.entity";
import {Passport} from "./../../passport/entity/passport.entity";
import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryColumn,
	UpdateDateColumn,
} from "typeorm";
import {EducationType} from "../types/client.type";

@Entity({name: `clients`})
export class Client {
	@PrimaryColumn()
	id: string;

	@Column({nullable: true})
	name: string;

	@Column({nullable: true})
	surname: string;

	@Column({nullable: true})
	patronymic: string;

	@Column({nullable: true})
	dob: Date;

	@OneToMany(() => Child, child => child.parent)
	children: Child[];

	@OneToOne(() => Passport)
	@JoinColumn({name: `passport_id`})
	passport?: Passport;

	@ManyToOne(() => Address, address => address.livingClients)
	@JoinColumn({name: `living_address`})
	livingAddress?: Address;

	@ManyToOne(() => Address, address => address.regClients)
	@JoinColumn({name: `reg_address`})
	regAddress?: Address;

	@Column({name: `type_education`, type: `text`})
	typeEducation: EducationType;

	@Column({nullable: true, type: `decimal`, scale: 2, name: `mon_income`})
	monIncome: number;

	@Column({nullable: true, type: `decimal`, scale: 2, name: `mon_expenses`})
	monExpenses: number;

	@OneToOne(() => Client)
	@JoinColumn({name: `spouse_id`})
	spouse?: Client;

	@CreateDateColumn({name: `created_at`})
	createdAt: Date;

	@UpdateDateColumn({name: `updated_at`})
	updatedAt: Date;

	@DeleteDateColumn({name: `deleted_at`})
	deletedAt: Date;
}
