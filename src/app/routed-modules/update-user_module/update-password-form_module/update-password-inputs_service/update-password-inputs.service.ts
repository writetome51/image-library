import { CurrentPasswordInputService } from './current-password-input.service';
import { CurrentUserInputsService }
	from '@current-user-inputs_service/current-user-inputs.abstract.service';
import { Injectable } from '@angular/core';
import { NewPasswordAgainInputService } from './new-password-again-input.service';
import { NewPasswordInputService } from './new-password-input.service';
import { UpdateUserServicesModule } from '../../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class UpdatePasswordInputsService extends CurrentUserInputsService {

	constructor(
		currentPasswordInput: CurrentPasswordInputService,
		newPasswordInput: NewPasswordInputService,
		newPasswordAgainInput: NewPasswordAgainInputService
	) {
		super(
			currentPasswordInput,
			newPasswordInput,
			newPasswordAgainInput
		);
	}

}
