import {TypeOrmModule} from "@nestjs/typeorm";
import {DatabaseModule} from "./../database/database.module";
import {Module} from "@nestjs/common";
import {Child} from "./entity/child.entity";

@Module({
	imports: [DatabaseModule, TypeOrmModule.forFeature([Child])],
})
export class ChildModule {}
