import {TypeOrmModule} from "@nestjs/typeorm";
import {Module} from "@nestjs/common";
import {DatabaseModule} from "../database/database.module";
import {ClientController} from "./client.controller";
import {ClientService} from "./client.service";
import {Client} from "./entity/client.entity";

@Module({
	imports: [DatabaseModule, TypeOrmModule.forFeature([Client])],
	controllers: [ClientController],
	providers: [ClientService],
	exports: [],
})
export class ClientModule {}
