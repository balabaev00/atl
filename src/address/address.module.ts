import {Address} from "./entity/address.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {DatabaseModule} from "./../database/database.module";
import {Module} from "@nestjs/common";

@Module({
	imports: [DatabaseModule, TypeOrmModule.forFeature([Address])],
	providers: [],
	controllers: [],
	exports: [],
})
export class AddressModule {}
