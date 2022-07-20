import {DatabaseModule} from "./../database/database.module";
import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Job} from "./entity/job.entity";

@Module({
	imports: [DatabaseModule, TypeOrmModule.forFeature([Job])],
})
export class JobModule {}
