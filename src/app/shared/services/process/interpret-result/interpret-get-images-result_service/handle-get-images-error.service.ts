import { batchDoesntExist } from '@string-constants/mongo-db-realm-function-errors';
import { LoadedImagesData as loadedImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { HandleDbOperationErrorService }
	from '@handle-db-operation-error_service/handle-db-operation-error.service';


@Injectable({providedIn: 'root'})
export class HandleGetImagesErrorService extends HandleDbOperationErrorService {

	async go(error) {
		loadedImages.data = [];

		if (not(error.message.includes(batchDoesntExist))) await super.go(error);
	}

}
