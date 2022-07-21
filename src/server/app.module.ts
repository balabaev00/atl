import {PassportModule} from "./../passport/passport.module";
import {JobModule} from "./../job/job.module";
import {CommunicationModule} from "./../communication/communication.module";
import {ChildModule} from "./../child/child.module";
import {ClientModule} from "../client/client.module";
import {AddressModule} from "../address/address.module";
import {Module} from "@nestjs/common";

@Module({
	imports: [
		ClientModule,
		AddressModule,
		ChildModule,
		CommunicationModule,
		JobModule,
		PassportModule,
	],
})
export class AppModule {}
