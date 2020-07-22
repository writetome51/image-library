import { AuthenticatorService } from '../../shared/services/authentication/authenticator.service';
import { AnswerSecurityQuestionInputsService }
	from './answer-security-question-inputs.service';
import { DBUser } from '../../../interfaces/db-user';
import { FormDataTransportProcessorService }
	from '../../shared/services/data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LoginResultInterpreterService }
	// tslint:disable-next-line:max-line-length
	from '../../shared/services/data-transport-processor/data-transport-result-interpreter/login-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class LoginBySecurityQuestionProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __authenticator: AuthenticatorService,
		__answerSecurityQuestionInputs: AnswerSecurityQuestionInputsService,
		__loginResultInterpreter: LoginResultInterpreterService
	) {
		super(__answerSecurityQuestionInputs, __loginResultInterpreter);
	}


	protected async _getResult(): Promise<DBUser | { error: { message: string } }> {
		return await this.__authenticator.authenticateBySecurityQuestion();
	}

}
