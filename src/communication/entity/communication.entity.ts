import {Column, Entity, PrimaryColumn} from "typeorm";
import {CommunicationType} from "types";

Entity({name: `communications`});
export class Communication {
	@PrimaryColumn()
	id: string;

	@Column()
	type: CommunicationType;

	@Column()
	value: string;
}
