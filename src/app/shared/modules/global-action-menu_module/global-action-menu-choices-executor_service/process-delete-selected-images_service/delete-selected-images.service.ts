import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@services/browser-storage/session-id-in-browser-storage.service';
import { MongoDBRealmFunctionService } from '@services/db/mongo-db-realm-function.service';
import { SelectedImagesData as selectedImages } from '@runtime-state-data/selected-images.data';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { GlobalActionMenuServicesModule }
	from '@app/shared/modules/global-action-menu_module/global-action-menu-services.module';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class DeleteSelectedImagesService implements IDoThis {

	constructor(
		private __realmFn: MongoDBRealmFunctionService,
		private __sessionIDInBrowser: SessionIDInBrowserStorageService
	) {
	}


	async go(): Promise<{ success: true } | HasError> {
		return this.__realmFn.call('pub_deleteImages', {
			sessionID: this.__sessionIDInBrowser.get(),
			imageNames: selectedImages.data.map((img: { name: string }) => img.name)
		});
	}

}