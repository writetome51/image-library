import { Component } from '@angular/core';
import { EmailPasswordInputsService } from '../../services/email-password-inputs.service';
import { ValidatingFormInputsComponent } from '../../validating-inputs/validating-form-inputs.component';


@Component({
	selector: 'login-form-inputs',
	template: `
		<validating-inputs [inputs]="inputs"></validating-inputs>
	`
})
export class LoginFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__emailPasswordInputs: EmailPasswordInputsService) {
		super(__emailPasswordInputs);
	}

}
