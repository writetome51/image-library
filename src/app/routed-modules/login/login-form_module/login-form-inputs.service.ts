import { CurrentUserInputsService }
	from '@current-user-inputs/current-user-inputs.abstract.service';
import { EmailInputService } from '@services/validating-input-related/email-input.service';
import { Injectable } from '@angular/core';
import { PasswordInputService } from '@services/validating-input-related/password-input.service';
import { LoginFormServicesModule } from './login-form-services.module';


@Injectable({providedIn: LoginFormServicesModule})
export class LoginFormInputsService extends CurrentUserInputsService {

	constructor(emailInput: EmailInputService, passwordInput: PasswordInputService) {
		super(emailInput, passwordInput);
	}

}
