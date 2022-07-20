import {Child} from "./../../child/entity/child.entity";
import {Address} from "./../../address/entity/address.entity";
import {Passport} from "./../../passport/entity/passport.entity";
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryColumn,
	UpdateDateColumn,
} from "typeorm";

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

	@OneToMany(() => Child, child => child.user)
	children: Child[];

	@OneToOne(() => Passport)
	@JoinColumn({name: `passport_id`})
	passport?: Passport;

	@ManyToOne(() => Address, address => address.clients)
	@JoinColumn({name: `living_address`})
	livingAddress: Address;

	@ManyToOne(() => Address, address => address.clients)
	regAddress: Address;

	@CreateDateColumn({name: `created_at`})
	createdAt: Date;

	@UpdateDateColumn({name: `updated_at`})
	updatedAt: Date;
}
