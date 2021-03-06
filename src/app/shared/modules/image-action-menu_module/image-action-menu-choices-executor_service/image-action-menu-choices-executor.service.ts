import { ActionMenuContextChoicesExecutorService }
	from '@services/action-menu-context-choices-executor.abstract.service';
import { Injectable } from '@angular/core';
import { MenuChoiceLabelData as choiceLabel } from '../menu-choice-label.data';
import { ProcessToggleAddImageToLibraryService } from
	'./process-toggle-add-image-to-library_service/process-toggle-add-image-to-library.service';
import { ImageActionMenuServicesModule } from '../image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class ImageActionMenuChoicesExecutorService extends ActionMenuContextChoicesExecutorService {

	constructor(
		processToggleAddImageToLibrary: ProcessToggleAddImageToLibraryService
	) {
		super([
			{executor: processToggleAddImageToLibrary, label: choiceLabel.toggleAddImageToLibrary}
		]);
	}

}
