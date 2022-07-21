import {ChildDto} from "./../../child/dto/child.dto";
import {AddressDto} from "./../../address/dto/address.dto";
import {PassportDto} from "./../../passport/dto/passport.dto";
import {EducationType} from "../types/client.type";
import {IsDate, IsNumber, IsOptional, IsString} from "class-validator";
import {Type} from "class-transformer";

export class CreateClientDto {
	@IsOptional()
	@IsString()
	name?: string;

	@IsOptional()
	@IsString()
	surname?: string;

	@IsOptional()
	@IsString()
	patronymic?: string;

	@IsOptional()
	@IsDate()
	dob?: Date;

	@Type(() => ChildDto)
	children: ChildDto[];

	@IsOptional()
	@Type(() => PassportDto)
	passport?: PassportDto;

	@IsOptional()
	@Type(() => AddressDto)
	livingAddress?: AddressDto;

	@IsOptional()
	@Type(() => AddressDto)
	regAddress?: AddressDto;

	jobs: []; // TODO fix

	typeEducation: EducationType;

	@IsOptional()
	@IsNumber()
	monIncome?: number;

	@IsOptional()
	@IsNumber()
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

export class UpdateClientDto {
	name?: string;
	surname?: string;
	patronymic?: string;
	dob?: Date;

	children?: ChildDto[];

	passport?: PassportDto;
	livingAddress?: AddressDto;
	regAddress?: AddressDto;

	jobs?: []; // TODO fix

	typeEducation?: EducationType;
	monIncome?: number;
	monExpenses?: number;

	communications: []; //TODO fix
}
