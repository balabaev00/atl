import {Column, Entity, PrimaryColumn} from "typeorm";
import {CommunicationType} from "../types/communication.type";

@Entity({name: `communications`})
export class Communication {
	@PrimaryColumn()
	id: string;

	@Column(`text`)
	type: CommunicationType;

	@Column()
	value: string;
}
