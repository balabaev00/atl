import {Type} from "class-transformer";
import {IsDate, IsOptional, IsString} from "class-validator";

export class ChildDto {
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
}
