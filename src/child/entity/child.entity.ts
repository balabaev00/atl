import {Client} from "./../../client/entity/client.entity";
import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";

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

	@Column({nullable: true})
	dob: Date;

	@ManyToOne(() => Client, parent => parent.children)
	@JoinColumn({name: `parent_id`})
	parent: Client;
}
