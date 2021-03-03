import { Injectable } from '@angular/core';
import { SecurityAnswerInputService } from '@validating-input/security-answer-input.service';
import { CurrentUserData } from '@runtime-state-data/static-classes/current-user.data';
import { SecurityQuestionServicesModule } from '../security-question-services.module';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class SecurityAnswerLoginInputService extends SecurityAnswerInputService {

	constructor() {
		super();
		this.data.prompt = `Enter your answer:`;
		this.data.objectToBind = CurrentUserData;
	}

}