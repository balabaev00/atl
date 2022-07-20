import {TypeOrmModule} from "@nestjs/typeorm";
import {DatabaseModule} from "./../database/database.module";
import {Module} from "@nestjs/common";
import {Child} from "./entity/child.entity";
import {ChildService} from "./child.service";

@Module({
	imports: [DatabaseModule, TypeOrmModule.forFeature([Child])],
	providers: [ChildService],
	exports: [ChildService],
})
export class ChildModule {}
