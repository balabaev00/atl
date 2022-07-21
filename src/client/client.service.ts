import {PassportService} from "./../passport/passport.service";
import {getId} from "../functions/function";
import {AddressService} from "./../address/address.service";
import {AddressDto} from "./../address/dto/address.dto";
import {ChildDto} from "./../child/dto/child.dto";
import {ChildService} from "./../child/child.service";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreateClientDto} from "./dto/client.dto";
import {Client} from "./entity/client.entity";
import {EducationType, SortType} from "./types/client.type";
const _ = require("lodash");
@Injectable()
export class ClientService {
	constructor(
		@InjectRepository(Client) private clientRepository: Repository<Client>,
		private childService: ChildService,
		private addressService: AddressService,
		private passportService: PassportService
	) {}

	/**
	 * It creates a new client, saves it to the database, and returns it
	 * @param {CreateClientDto} dto - CreateClientDto - the object that will be passed to the method.
	 * @returns The client object is being returned.
	 */
	async create(dto: CreateClientDto) {
		const newClient = new Client();

		newClient.id = getId();
		if (dto.name) newClient.name = dto.name;
		if (dto.surname) newClient.surname = dto.surname;
		if (dto.patronymic) newClient.patronymic = dto.patronymic;
		if (dto.dob) newClient.dob = dto.dob;

		await this.createChildren(dto.children, newClient);
		await this.createAddresses(newClient, dto.livingAddress, dto.regAddress);
		newClient.passport = await this.passportService.create(dto.passport);

		newClient.typeEducation = dto.typeEducation;

		if (dto.monExpenses) newClient.monExpenses = dto.monExpenses;
		if (dto.monIncome) newClient.monIncome = dto.monIncome;

		return await this.clientRepository.save(newClient);
	}

	/**
	 * It creates a new child for each child in the children array, and then pushes the new child to the
	 * client's children array
	 * @param {ChildDto[]} children - ChildDto[], client: Client
	 * @param {Client} client - Client - the client object that was created
	 */
	private async createChildren(children: ChildDto[], client: Client) {
		if (!children) return;

		if (children.length > 0)
			children.forEach(async child => {
				const newChild = await this.childService.create(child, client);

				client.children.push(newChild);
			});
	}

	/**
	 * If the addresses are equal, create one address and assign it to both living and reg addresses. If they are not equal, create both addresses
	 * @param {Client} client - Client - the client object that we're creating
	 * @param {AddressDto} [livingAddress] - AddressDto - the address of the client's residence
	 * @param {AddressDto} [regAddress] - AddressDto - the address of the client's registration
	 */
	private async createAddresses(
		client: Client,
		livingAddress?: AddressDto,
		regAddress?: AddressDto
	) {
		if (!livingAddress && !regAddress) return;

		if (_.isEqual(livingAddress, regAddress)) {
			client.livingAddress = await this.addressService.create(livingAddress);
			client.regAddress = client.livingAddress;
			return;
		}

		if (livingAddress && !regAddress)
			client.livingAddress = await this.addressService.create(livingAddress);

		if (regAddress && !livingAddress)
			client.regAddress = await this.addressService.create(regAddress);

		if (regAddress && livingAddress) {
			client.regAddress = await this.addressService.create(regAddress);
			client.livingAddress = await this.addressService.create(livingAddress);
		}
	}

	/**
	 * It deletes a client by its id
	 * @param {string} clientId - string - the id of the client to be deleted
	 * @returns A string
	 */
	async delete(clientId: string) {
		const clientResponse = await this.clientRepository.softDelete({id: clientId});

		if (!clientResponse.affected) return `ENTITY_NOT_FOUND`;

		return `CLIENT_WAS_DELETED`;
	}

	/**
	 * We're selecting a client by id, and we're also selecting the client's living address, registration
	 * address, and passport
	 * @param {string} clientId - string - the id of the client we want to get
	 * @returns The client object
	 */
	async getOne(clientId: string) {
		const client = await this.clientRepository
			.createQueryBuilder(`clients`)
			.leftJoinAndSelect(`clients.livingAddress`, `livingAddress`)
			.leftJoinAndSelect(`clients.regAddress`, `regAddress`)
			.leftJoinAndSelect(`clients.passport`, `passports`)
			.where(`clients.id = :clientId`, {clientId: clientId})
			.getOne();

		if (!client) return `ENTITY_NOT_FOUND`;

		return client;
	}

	async getAll(sortBy?: SortType, sortDir?: string) {
		if (sortBy && sortDir)
			return await this.clientRepository
				.createQueryBuilder(`clients`)
				.leftJoinAndSelect(`clients.livingAddress`, `livingAddress`)
				.leftJoinAndSelect(`clients.regAddress`, `regAddress`)
				.leftJoinAndSelect(`clients.passport`, `passports`)
				.orderBy(`clients.${sortDir}`, SortType[sortBy])
				.getMany();

		if (!sortDir || !sortBy)
			return await this.clientRepository
				.createQueryBuilder(`clients`)
				.leftJoinAndSelect(`clients.livingAddress`, `livingAddress`)
				.leftJoinAndSelect(`clients.regAddress`, `regAddress`)
				.leftJoinAndSelect(`clients.passport`, `passports`)
				.getMany();
	}
}
