import {Client} from "./../client/entity/client.entity";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {getId} from "../functions/function";
import {Repository} from "typeorm";
import {ChildDto} from "./dto/child.dto";
import {Child} from "./entity/child.entity";

@Injectable()
export class ChildService {
	constructor(@InjectRepository(Child) private childRepository: Repository<Child>) {}

	/**
	 * It creates a new child and saves it to the database
	 * @param {ChildDto} dto - ChildDto - the data transfer object that will be used to create a new
	 * child.
	 * @param {Client} parent - Client - the parent object that we get from the database.
	 * @returns The newChild object is being returned.
	 */
	async create(dto: ChildDto, parent: Client) {
		const newChild = new Child();

		newChild.id = getId();
		if (dto.name) newChild.name = dto.name;
		if (dto.surname) newChild.surname = dto.surname;
		if (dto.patronymic) newChild.patronymic = dto.patronymic;
		if (dto.dob) newChild.dob = dto.dob;
		newChild.parent = parent;

		return await this.childRepository.save(newChild);
	}
}
