import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
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

	@Column()
	dob: Date;

	@CreateDateColumn({name: `created_at`})
	createdAt: Date;

	@UpdateDateColumn({name: `updated_at`})
	updatedAt: Date;
}
