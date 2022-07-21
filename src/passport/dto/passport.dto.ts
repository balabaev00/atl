import {Type} from "class-transformer";
import {IsNotEmpty} from "class-validator";

export class PassportDto {
	@IsNotEmpty()
	@Type(() => String)
	series: string;

	@IsNotEmpty()
	@Type(() => String)
	number: string;

	@IsNotEmpty()
	@Type(() => String)
	giver: string;

	@IsNotEmpty()
	@Type(() => Date)
	dateIssued: Date;
}
