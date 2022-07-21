import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {getId} from "../functions/function";
import {Repository} from "typeorm";
import {PassportDto} from "./dto/passport.dto";
import {Passport} from "./entity/passport.entity";

@Injectable()
export class PassportService {
	constructor(
		@InjectRepository(Passport) private passportRepository: Repository<Passport>
	) {}

	/**
	 * It creates a new passport
	 * @param {PassportDto} dto - PassportDto - the data transfer object (DTO) that will be used to create
	 * a new passport.
	 * @returns The created passport.
	 */
	async create(dto: PassportDto) {
		if (!dto) return;

		const newPassport = new Passport();

		newPassport.id = getId();
		newPassport.series = dto.series;
		newPassport.number = dto.number;
		newPassport.giver = dto.giver;
		newPassport.dateIssued = dto.dateIssued;

		return await this.passportRepository.save(newPassport);
	}
}
