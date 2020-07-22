import { Injectable } from '@angular/core';
import { CurrentEmailInputService } from './current-email-input.service';
import { NewEmailInputService } from './new-email-input.service';
import { PasswordInputService } from '../../shared/services/validating-input/password/password-input.service';
import { CurrentUserInputsService }
	from '../../shared/services/validating-inputs/current-user-inputs.service';


@Injectable({providedIn: 'root'})

export class UpdateEmailInputsService extends CurrentUserInputsService {

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
