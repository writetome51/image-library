import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { DBUser } from '@interfaces/db-user.interface';
import { EmailInBrowserStorageService } from '@browser-storage/email-in-browser-storage.service';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@services/db/mongo-db-realm-function.service';
import { SessionIDInBrowserStorageService }
	from '@browser-storage/session-id-in-browser-storage.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { HasError } from '@interfaces/has-error.interface';
import { UpdateUserServicesModule } from '../../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class UpdatePasswordService implements IDoThis {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __emailInBrowser: EmailInBrowserStorageService
	) {
	}


	async go(): Promise<DBUser | HasError> {
		return await this.__realmFn.call('pub_updatePasswordAndReturnUser', {
			email: this.__emailInBrowser.get(),
			password: currentUser.password,
			newPassword: currentUser.newPassword,
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}