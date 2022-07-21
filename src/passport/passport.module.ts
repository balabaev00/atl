import {TypeOrmModule} from "@nestjs/typeorm";
import {DatabaseModule} from "./../database/database.module";
import {Module} from "@nestjs/common";
import {Passport} from "./entity/passport.entity";
import {PassportService} from "./passport.service";

@Module({
	imports: [DatabaseModule, TypeOrmModule.forFeature([Passport])],
	providers: [PassportService],
	exports: [PassportService],
})
export class PassportModule {}
