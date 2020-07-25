import { Component } from '@angular/core';
import { CreateUserProcessorService } from './create-user-processor/create-user-processor.service';
import { StartDataProcessComponent }
	from '../../../shared/abstract-components/start-data-process.component';


@Component({
	selector: 'create-user-button',
	template: `
		<start-data-process-button [type]="'submit'" [context]="this">
			Create
		</start-data-process-button>
	`
})
export class CreateUserButtonComponent extends StartDataProcessComponent {

	constructor(__createUserProcessor: CreateUserProcessorService) {
		super(__createUserProcessor);
	}

}
