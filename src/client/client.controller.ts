import {Body, Controller, Delete, Get, Param, Post, Query} from "@nestjs/common";
import {ClientService} from "./client.service";
import {CreateClientDto} from "./dto/client.dto";
import {SortType} from "./types/client.type";

@Controller(`clients`)
export class ClientController {
	constructor(private clientService: ClientService) {}

	@Post(``)
	async create(@Body() dto: CreateClientDto) {
		const res = await this.clientService.create(dto);

		return JSON.stringify(res.id);
	}

	@Get(``)
	async getAll(
		@Query(`limit`) limit: number,
		@Query(`page`) page: number,
		@Query(`sortBy`) sortBy: SortType,
		@Query(`sortDir`) sortDir: string
	) {
		const res = await this.clientService.getAll(sortBy, sortDir);
		if (!limit) limit = 10;
		const pageCount = Math.ceil(res.length / limit);

		if (!page) page = 1;
		if (page > pageCount) page = pageCount;
		return {
			limit: limit,
			page: page,
			total: pageCount,
			data: res.slice(page * limit - limit, page * limit),
		};
	}

	@Delete(`:clientId`)
	async delete(@Param(`clientId`) clientId: string) {
		const res = await this.clientService.delete(clientId);

		if (res === `ENTITY_NOT_FOUND`)
			return {
				status: 404,
				code: res,
			};

		if (res === `CLIENT_WAS_DELETED`)
			return {
				status: 204,
				code: res,
			};

		return {
			status: 500,
			code: `INTERNAL_SERVER_ERROR`,
		};
	}

	@Get(`:clientId`)
	async getOne(@Param(`clientId`) clientId: string) {
		const res = await this.clientService.getOne(clientId);

		if (res === `ENTITY_NOT_FOUND`)
			return {
				status: 404,
				code: res,
			};

		return res;
	}
}
