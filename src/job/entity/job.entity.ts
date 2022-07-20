import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {JobType} from "types";

@Entity({name: `jobs`})
export class Job {
	@PrimaryColumn()
	id: string;

	@Column()
	type: JobType;

	@Column({name: `date_emp`})
	dateEmp: Date;

	@Column({name: `date_dismissal`})
	dateDismissal: Date;

	@Column({type: `decimal`, scale: 2, name: `mon_income`})
	monIncome: number;

	@Column()
	tin: string;

	@Column({name: `phone_number`})
	phoneNumber: string;

	@CreateDateColumn({name: `created_at`})
	createdAt: Date;

	@UpdateDateColumn({name: `updated_at`})
	updateAt: Date;
}
