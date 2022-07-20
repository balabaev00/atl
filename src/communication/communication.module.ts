import {DatabaseModule} from "./../database/database.module";
import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Communication} from "./entity/communication.entity";

@Module({
	imports: [DatabaseModule, TypeOrmModule.forFeature([Communication])],
})
export class CommunicationModule {}
