import { CurrentUserInputsService }
	from '@current-user-inputs_service/current-user-inputs.abstract.service';
import { Injectable } from '@angular/core';
import { LoggedInEmailVerificationInputService }
	from '../logged-in-email-verification-input.service';
import { PasswordInputService } from '@validating-input/password-input.service';
import { UpdateUserServicesModule } from '../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class DeleteUserInputsService extends CurrentUserInputsService {

	constructor(
		loggedInEmailVerificationInput: LoggedInEmailVerificationInputService,
		passwordInput: PasswordInputService
	) {
		super(
			loggedInEmailVerificationInput,
			passwordInput
		);
	}

}
