import { ImageBatch } from '@interfaces/image-batch.interface';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@db/mongo-db-realm-function.service';
import { SessionIDInBrowserStorageService }
	from '@browser-storage/session-id-in-browser-storage.service';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { AllImagesServicesModule }
	from '@app/routed-modules/all-images_module/all-images-services.module';
import { LoadConfiguration } from '@interfaces/load-configuration.interface';


@Injectable({providedIn: AllImagesServicesModule})
export class GetAllImagesService implements IDoThis {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __realmFn: MongoDBRealmFunctionService
	) {}


	async go(load: LoadConfiguration): Promise<ImageBatch | HasError> {

		return await this.__realmFn.call('pub_getUserImagesBatch', {
			sessionID: this.__sessionIDInBrowser.get(),
			batchSize: load.size,
			batchNumber: load.number
		});
	}

}
