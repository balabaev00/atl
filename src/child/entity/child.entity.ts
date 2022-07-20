import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity({name: `childs`})
export class Child {
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
}
