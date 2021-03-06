import { UserRecord } from '@interfaces/user-record.interface';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@services/db/mongo-db-realm-function.service';
import { SessionIDInBrowserStorageService }
	from '@browser-storage/session-id-in-browser-storage.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { HasError } from '@interfaces/has-error.interface';
import { UpdateUserServicesModule } from '../../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class UpdateEmailService implements IDoThis {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {}


	async go(email, newEmail, password): Promise<UserRecord | HasError> {

		return await this.__realmFn.call('pub_updateEmailAndReturnUser', {
			email, newEmail, password,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
