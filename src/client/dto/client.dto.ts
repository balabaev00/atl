import {ChildDto} from "./../../child/dto/child.dto";
import {AddressDto} from "./../../address/dto/address.dto";
import {PassportDto} from "./../../passport/dto/passport.dto";
import {EducationType} from "../types/client.type";

export class CreateClientDto {
	name?: string;
	surname?: string;
	patronymic?: string;
	dob?: Date;

	children: ChildDto[];

	passport: PassportDto;
	livingAddress?: AddressDto;
	regAddress?: AddressDto;

	jobs: []; // TODO fix

	typeEducation: EducationType;
	monIncome?: number;
	monExpenses?: number;

	communications: []; //TODO fix
}

export class ClientDto {
	name?: string;
	surname?: string;
	patronymic?: string;
	dob?: Date;

	passport: PassportDto;
	livingAddress: AddressDto;
	regAddress: AddressDto;
}
