import { LibraryRecord } from '@interfaces/library-record.interface';
import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@services/browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmFunctionService } from '@services/db/mongo-db-realm-function.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { HasError } from '@interfaces/has-error.interface';


@Injectable({providedIn: 'root'})
export class GetLibrariesService implements IDoThis {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {}


	async go(): Promise<LibraryRecord[] | HasError> {
		return await this.__realmFn.call('pub_getLibraries', {
			sessionID: this.__sessionIDInBrowser.get()
		});
	}

}
