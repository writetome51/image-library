import { Injectable } from '@angular/core';
import { EmailInputService } from '@validating-input/email-input.service';
import { CurrentUserFormData } from '@runtime-state-data/static-classes/current-user-form.data';
import { SecurityQuestionServicesModule } from '../security-question-services.module';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class EmailToGetSecurityQuestionInputService extends EmailInputService {

	constructor() {
		super();
		this.data.prompt = `Enter email to receive security question:`;
		this.data.objectToBind = CurrentUserFormData;
	}

}
