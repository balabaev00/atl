import {Client} from "./../client/entity/client.entity";
import {getId} from "../functions/function";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {AddressDto} from "./dto/address.dto";
import {Address} from "./entity/address.entity";

@Injectable()
export class AddressService {
	constructor(
		@InjectRepository(Address) private addressRepository: Repository<Address>
	) {}

	/**
	 * It creates a new address and saves it to the database
	 * @param {AddressDto} dto - AddressDto - the data transfer object that will be used to create a new
	 * address.
	 * @returns Promise<Address>
	 */
	async create(dto: AddressDto) {
		const newAddress = new Address();

		newAddress.id = getId();
		if (dto.zipCode) newAddress.zipCode = dto.zipCode;
		if (dto.country) newAddress.country = dto.country;
		if (dto.city) newAddress.city = dto.city;
		if (dto.region) newAddress.region = dto.region;
		if (dto.street) newAddress.street = dto.street;
		if (dto.house) newAddress.house = dto.house;
		if (dto.apartment) newAddress.apartment = dto.apartment;

		return await this.addressRepository.save(newAddress);
	}
}
