import { Component } from '@angular/core';
import { UpdatePasswordProcessorService }
	from '../../services/data-operation-processor/update-password-processor.service';
import { PerformAppDataOperationService as performAppDataOperation }
	from '../../services/perform-app-data-operation.service';
import { ClearAlertAndFormOnInitComponent } from '../../clear-alert-and-form-on-init.component';


@Component({
	selector: 'update-user-password-form',
	templateUrl: './update-user-password-form.component.html'
})
export class UpdateUserPasswordFormComponent extends ClearAlertAndFormOnInitComponent {

	static readonly path = 'password';
	static readonly heading = 'Update Password';


	constructor(private __updatePasswordProcessor: UpdatePasswordProcessorService) {
		super();
	}


	async save() {
		await performAppDataOperation.go(this.__updatePasswordProcessor);
	}

}
