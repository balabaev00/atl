import {Body, Controller, Post} from "@nestjs/common";
import {ClientService} from "./client.service";
import {CreateClientDto} from "./dto/client.dto";

@Controller(`clients`)
export class ClientController {
	constructor(private clienService: ClientService) {}

	@Post(``)
	async create(@Body() dto: CreateClientDto) {
		const res = await this.clienService.create(dto);
	}
}
