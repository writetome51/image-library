import { Injectable } from '@angular/core';
import { UserStorageService } from '../user/user-storage.service';
import { FormDataOperationProcessorService } from './form-data-operation-processor.service';
import { UpdateEmailFormInputsService }
	from '../validating-inputs/update-email-form-inputs.service';
import { UpdateEmailOrPasswordResultInterpreterService }
	from '../result-interpreter/update-email-or-password-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class UpdateEmailProcessorService extends FormDataOperationProcessorService {

	constructor(
		private __userStorage: UserStorageService,
		__updateEmailFormInputs: UpdateEmailFormInputsService,
		__updateEmailResultInterpreter: UpdateEmailOrPasswordResultInterpreterService
	) {
		super(__updateEmailFormInputs, __updateEmailResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__userStorage.updateEmail();
	}

}
