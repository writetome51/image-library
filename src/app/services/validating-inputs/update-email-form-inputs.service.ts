import { Injectable } from '@angular/core';
import { CurrentEmailInputService } from '../validating-input/current-email-input.service';
import { NewEmailInputService } from '../validating-input/new-email-input.service';
import { PasswordInputService } from '../validating-input/password-input.service';
import { CurrentUserInputsService } from './current-user-inputs.service';


@Injectable({providedIn: 'root'})

export class UpdateEmailFormInputsService extends CurrentUserInputsService {

	constructor(
		currentEmailInput: CurrentEmailInputService,
		newEmailInput: NewEmailInputService,
		passwordInput: PasswordInputService
	) {
		super(
			currentEmailInput,
			newEmailInput,
			passwordInput
		);
	}

}
