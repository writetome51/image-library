import { Component } from '@angular/core';
import { UpdateEmailProcessorService }
	from '../../services/data-transport-processor/update/update-email-processor.service';
import { StartDataProcessComponent } from '../../start-data-process.component';


@Component({
	selector: 'update-email-save-button',
	template: `
		<start-data-process-button [type]="'submit'" [context]="this">
			Save Changes
		</start-data-process-button>
	`
})
export class UpdateEmailSaveButtonComponent extends StartDataProcessComponent {

	constructor(__updateEmailProcessor: UpdateEmailProcessorService) {
		super(__updateEmailProcessor);
	}

}
