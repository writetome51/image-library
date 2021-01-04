import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { HandleDataTransportProcessErrorService }
	from './handle-data-transport-process-error.service';
import { duplicate } from '@string-constants/rest-api-errors';
import { Injectable } from '@angular/core';
import { libraryAlreadyExists }	from '@string-constants/form-submission-errors';


@Injectable({providedIn: 'root'})
export class HandleUpdateOrNewLibraryErrorService extends HandleDataTransportProcessErrorService {

	async go(error) {
		if (error.message.includes(duplicate)) alert.error = libraryAlreadyExists;
		else await super.go(error);
	}

}
