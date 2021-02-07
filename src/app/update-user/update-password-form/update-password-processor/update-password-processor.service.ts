import { DBUser } from '@interfaces/app-user/db-user.interface';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UpdatePasswordInputsService }
	from '../update-password-inputs/update-password-inputs.service';
import { UpdatePasswordResultInterpreterService }
	from './update-password-result-interpreter.service';
import { UpdatePasswordService } from './update-password.service';


@Injectable({providedIn: 'root'})
export class UpdatePasswordProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __updatePassword: UpdatePasswordService,
		__updatePasswordFormInputs: UpdatePasswordInputsService,
		__updatePasswordResultInterpreter: UpdatePasswordResultInterpreterService
	) {
		super(__updatePasswordFormInputs, __updatePasswordResultInterpreter);
	}


	protected async _getResult(): Promise<DBUser | { error: { message: string } }> {
		return await this.__updatePassword.go();
	}

}
