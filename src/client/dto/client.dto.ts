import {ChildDto} from "./../../child/dto/child.dto";
import {EducationType} from "types";
import {AddressDto} from "./../../address/dto/address.dto";
import {PassportDto} from "./../../passport/dto/passport.dto";

export class CreateClientDto {
	name?: string;
	surname?: string;
	patronymic?: string;
	dob?: Date;

	children: ChildDto[];

	passport: PassportDto;
	livingAddress: AddressDto;
	regAddress: AddressDto;

	typeEducation: EducationType;
	monIncome: number;
	monExpenses: number;
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
