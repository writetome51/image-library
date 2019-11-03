import { AuthenticatorService } from './authenticator.service';
import { FormDataProcessorService } from '../../form-data-processor.service';
import { EmailPasswordInputsService } from '../../validating-inputs/email-password-inputs.service';
import { Injectable } from '@angular/core';
import { LoginResultInterpreterService } from './login-result-interpreter.service';


@Injectable({
	providedIn: 'root'
})
export class LoginProcessorService extends FormDataProcessorService {

	constructor(
		__emailPasswordInputs: EmailPasswordInputsService,
		__loginResultInterpreter: LoginResultInterpreterService,
		private __authenticator: AuthenticatorService
	) {
		super(__emailPasswordInputs, __loginResultInterpreter);

		this._getResult = async () => await this.__authenticator.authenticate();
	}

}
