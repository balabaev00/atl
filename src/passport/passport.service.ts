import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Passport} from "./entity/passport.entity";

@Injectable()
export class PassportService {
	constructor(
		@InjectRepository(Passport) private passportRepository: Repository<Passport>
	) {}

	async create(dto: Passport);
}
