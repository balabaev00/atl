import {Type} from "class-transformer";
import {IsOptional, IsString} from "class-validator";

export class AddressDto {
	@IsOptional()
	@Type(() => String)
	zipCode?: string;

	@IsOptional()
	@IsString()
	country?: string;

	@IsOptional()
	@IsString()
	region?: string;

	@IsOptional()
	@IsString()
	city?: string;

	@IsOptional()
	@IsString()
	street?: string;

	@IsOptional()
	@IsString()
	house?: string;

	@IsOptional()
	@Type(() => String)
	apartment?: string;
}
