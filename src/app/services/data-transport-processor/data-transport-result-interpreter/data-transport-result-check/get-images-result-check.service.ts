import { Injectable } from '@angular/core';
import { DataTransportResultCheckService } from './data-transport-result-check.service';
import { batchDoesntExist } from '../../../../string-constants/rest-api-errors';
import { LoadedImagesData as loadedImages }
	from '../../../../data/runtime-state-data/loaded-images.data';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})

export class GetImagesResultCheckService extends DataTransportResultCheckService {

	protected async _errorHandler(errMessage) {
		// @ts-ignore
		loadedImages = {};

		if (not(errMessage.includes(batchDoesntExist))) await super._errorHandler(errMessage);
	}

}
