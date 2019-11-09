import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { UserValidationRulesService } from '../user/user-validation-rules.service';
import { PasswordInputService } from './password-input.service';
import { attachCurrentPrefix } from './attach-prefix.functions';


@Injectable({providedIn: 'root'})

export class CurrentPasswordInputService extends PasswordInputService {

	constructor(
		__currentUser: CurrentUserService,
		__rules: UserValidationRulesService
	) {
		super(__currentUser, __rules);
		attachCurrentPrefix(this);
	}

}
