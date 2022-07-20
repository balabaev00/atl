import {ChildService} from "./../child/child.service";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreateClientDto} from "./dto/client.dto";
import {Client} from "./entity/client.entity";

@Injectable()
export class ClientService {
	constructor(
		@InjectRepository(Client) private clientRepository: Repository<Client>,
		private childService: ChildService
	) {}

	async create(dto: CreateClientDto) {
		const newClient = new Client();

		if (dto.name) newClient.name;
		if (dto.surname) newClient.surname;
		if (dto.patronymic) newClient.patronymic;
		if (dto.dob) newClient.dob = dto.dob;

		const childerCount = dto.children.length;
		if (childerCount > 0)
			for (let i = 0; i < childerCount; i++) {
				const newChild = await this.childService.create(
					dto.children[i],
					newClient
				);

				newClient.children.push(newChild);
			}
	}
}
