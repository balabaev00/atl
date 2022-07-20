import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreateClientDto} from "./dto/client.dto";
import {Client} from "./entity/client.entity";

@Injectable()
export class ClientService {
	constructor(@InjectRepository(Client) private clientRepository: Repository<Client>) {}

	async create(dto: CreateClientDto) {}
}
