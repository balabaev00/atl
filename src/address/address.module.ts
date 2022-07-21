import {Address} from "./entity/address.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {DatabaseModule} from "./../database/database.module";
import {Module} from "@nestjs/common";
import {AddressService} from "./address.service";

@Module({
	imports: [DatabaseModule, TypeOrmModule.forFeature([Address])],
	providers: [AddressService],
	exports: [AddressService],
})
export class AddressModule {}
