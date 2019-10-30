import { Injectable } from '@angular/core';
import { AlertService } from '../../alert.service';
import { FormValidatorService } from '../../form-validator.service';
import { EmailInputValidatorService } from '../../input-validator/email-input-validator.service';
import { PasswordInputValidatorService } from '../../input-validator/password-input-validator.service';
import { PasswordAgainInputValidatorService } from '../../input-validator/password-again-input-validator.service';
import { SecurityQuestionInputValidatorService } from './security-question-input-validator.service';
import { SecurityAnswerInputValidatorService } from './security-answer-input-validator.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserFormValidatorService extends FormValidatorService {


	constructor(
		_alert: AlertService,
		emailInputValidator: EmailInputValidatorService,
		passwordInputValidator: PasswordInputValidatorService,
		passwordAgainInputValidator: PasswordAgainInputValidatorService,
		questionInputValidator: SecurityQuestionInputValidatorService,
		answerInputValidator: SecurityAnswerInputValidatorService
	) {
		super(_alert);

		this._inputValidators = [
			emailInputValidator,
			passwordInputValidator,
			passwordAgainInputValidator,
			questionInputValidator,
			answerInputValidator
		];
	}


}