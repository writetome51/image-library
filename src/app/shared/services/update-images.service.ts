// import { AppImage } from '@interfaces/app-image.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';


@Injectable({providedIn: 'root'})
export class UpdateImagesService implements IDoThis {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {
	}


	async go(
		// `changes` can contain any property from AppImage.
		// The properties in 'changes' can contain dot-notation.
		images: Array<{ name: string, changes: object }>

	): Promise<{ success: true } | { error: { message: string } }> {
		return await this.__realmFn.call('pub_updateImages', {
			sessionID: this.__sessionIDInBrowser.get(),
			images
		});
	}

}