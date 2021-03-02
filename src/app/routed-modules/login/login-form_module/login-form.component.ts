import { AppModulePathData } from '@app/app-module-path.data';
import { Component } from '@angular/core';
import { ProcessLoginByPasswordService }
	from './process-login-by-password_service/process-login-by-password.service';


@Component({
	selector: 'login-form',
	template: `
		<div class="form-container">
			<form>
				<login-form-inputs></login-form-inputs>

				<submit-form-button [label]="'Sign In'" [process]="process">
				</submit-form-button>

				<a [routerLink]="moduleRoutes.SecurityQuestionModule" routerLinkActive="active">
					Forgot Password?
				</a>
			</form>
		</div>
	`
})
export class LoginFormComponent {

	moduleRoutes = AppModulePathData;


	constructor(public process: ProcessLoginByPasswordService) {
	}

}