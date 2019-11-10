import { Injectable } from '@angular/core';
import { UserValidationRulesService as rules } from '../user/user-validation-rules.service';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';
import { getDefaultPasswordInput } from '../../validating-inputs/get-input.functions';


@Injectable({providedIn: 'root'})

export class PasswordInputService extends ValidatingInputService {

	constructor() {
		super();

		this.data = getDefaultPasswordInput();
		this.data.id = 'password-input';
		this.data.propertyToBind = 'password';
		this.data.placeholder = 'Password';
		this.data.isValid = () => (
			this.data.objectToBind[this.data.propertyToBind].length >= rules.passwordMinLength
		);
		this.data.errorMessage = `The password must be at least ${rules.passwordMinLength} characters`;
	}

}
