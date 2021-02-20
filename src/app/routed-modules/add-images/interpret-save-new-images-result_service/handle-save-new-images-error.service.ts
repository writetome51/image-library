import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { duplicate, sizeRequirement } from '@string-constants/mongo-db-realm-function-errors';
import { imageWithSameNameAlreadyExists, imageSizeLimitExceeded }
	from '@string-constants/form-submission-errors';
import { Injectable } from '@angular/core';
import { AddImagesServicesModule } from '../add-images-services.module';
import { HandleDataTransportErrorService } from '@data-transport-processor/interpret-data-transport-result/handle-data-transport-error/handle-data-transport-error.service';


@Injectable({providedIn: AddImagesServicesModule})
export class HandleSaveNewImagesErrorService extends HandleDataTransportErrorService {

	async go(errMessage) {
		if (errMessage.includes(duplicate)) alert.error = imageWithSameNameAlreadyExists;

		else if (errMessage.includes(sizeRequirement)) alert.error = imageSizeLimitExceeded;

		else await super.go(errMessage);
	}

}