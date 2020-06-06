import { Component } from '@angular/core';
import { LoginProcessorService }
	from '../../services/data-transport-processor/authentication/login-processor.service';
import { StartDataProcessComponent } from '../../start-data-process.component';


@Component({
	selector: 'login-button',
	template: `
		<start-data-process-button [type]="'submit'" [context]="this">
			Sign In
		</start-data-process-button>
	`
})
export class LoginButtonComponent extends StartDataProcessComponent {

	constructor(__loginProcessor: LoginProcessorService) {
		super(__loginProcessor);
	}

}
