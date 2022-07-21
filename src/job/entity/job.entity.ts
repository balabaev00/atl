import {Address} from "./../../address/entity/address.entity";
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryColumn,
	UpdateDateColumn,
} from "typeorm";
import {JobType} from "../types/job.type";

@Entity({name: `jobs`})
export class Job {
	@PrimaryColumn()
	id: string;

	@Column(`text`)
	type: JobType;

	@Column({name: `date_emp`})
	dateEmp: Date;

	@Column({name: `date_dismissal`})
	dateDismissal: Date;

	@Column({type: `decimal`, scale: 2, name: `mon_income`})
	monIncome: number;

	@Column()
	tin: string;

	@ManyToOne(() => Address, address => address.factJobs)
	@JoinColumn({name: `fact_address`})
	factAddress?: Address;

	@ManyToOne(() => Address, address => address.jurJobs)
	@JoinColumn({name: `jur_address`})
	jurAddress?: Address;

	@Column({name: `phone_number`})
	phoneNumber: string;

	@CreateDateColumn({name: `created_at`})
	createdAt: Date;

	@UpdateDateColumn({name: `updated_at`})
	updateAt: Date;
}
