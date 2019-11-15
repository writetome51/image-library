import { Injectable } from '@angular/core';
import { UserValidationRulesService as rules } from '../user/user-validation-rules.service';
import { ValidatingTextInputService } from '../../validating-inputs/validating-text-input.service';
import { Bind_ValidatingInputService_to_CurrentUserService }
	from './bind-validating-input-service-to-current-user-service.decorator';


@Injectable({providedIn: 'root'})
@Bind_ValidatingInputService_to_CurrentUserService()

export class EmailInputService extends ValidatingTextInputService {

	constructor() {
		super();

		this.data.id = 'email-input';
		this.data.propertyToBind = 'email';
		this.data.placeholder = 'Email';
		// @ts-ignore
		this.data.isValid = [
			() => (this.data.objectToBind[this.data.propertyToBind].length >= rules.emailMinLength),
			() => (!(this.data.objectToBind[this.data.propertyToBind].includes(' ')))
		];
		this.data.errorMessage = [
			`The email must be at least ${rules.emailMinLength} characters`,
			`The email must not include spaces`
		];
	}

}
