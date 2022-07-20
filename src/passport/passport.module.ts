import {TypeOrmModule} from "@nestjs/typeorm";
import {DatabaseModule} from "./../database/database.module";
import {Module} from "@nestjs/common";
import {Passport} from "./entity/passport.entity";

@Module({
	imports: [DatabaseModule, TypeOrmModule.forFeature([Passport])],
})
export class PassportModule {}
