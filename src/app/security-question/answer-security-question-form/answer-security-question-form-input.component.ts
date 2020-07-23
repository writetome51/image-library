import { Component } from '@angular/core';
import { ValidatingFormInputComponent, } from '@writetome51/validating-inputs';
import { SecurityAnswerLoginInputService } from './security-answer-login-input.service';


@Component({
	selector: 'answer-security-question-form-input',
	template: `<app-validating-form-input [data]="input"></app-validating-form-input>`
})
export class AnswerSecurityQuestionFormInputComponent extends ValidatingFormInputComponent {

	constructor(__securityAnswerLoginInput: SecurityAnswerLoginInputService) {
		super(__securityAnswerLoginInput);
	}

}
