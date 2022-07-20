import {ClientModule} from "../client/client.module";
import {AddressModule} from "../address/address.module";
import {Module} from "@nestjs/common";

@Module({
	imports: [ClientModule, AddressModule],
})
export class AppModule {}
