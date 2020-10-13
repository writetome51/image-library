import { Injectable } from '@angular/core';
import { DataTransportResultCheckService }	// tslint:disable-next-line:max-line-length
	from '../../../../shared/services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';
import { AlertData as alert }
	from '../../../../shared/data/runtime-state/static-classes/alert.data';
import { accountAlreadyExists } from '../../../../shared/string-constants/form-submission-errors';
import { duplicate } from '../../../../shared/string-constants/rest-api-errors';


@Injectable({
	providedIn: 'root'
})
export class NewUserResultCheckService extends DataTransportResultCheckService {

	protected async _errorHandler(errMessage) {
		if (errMessage.includes(duplicate)) alert.error = accountAlreadyExists;
		else await super._errorHandler(errMessage);
	}

}