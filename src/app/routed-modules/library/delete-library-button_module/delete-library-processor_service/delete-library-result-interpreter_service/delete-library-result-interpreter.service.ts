import { DataTransportProcessResultInterpreterService }
	from '@data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { HandleDataTransportProcessErrorService }
	from '@handle-data-transport-process-error/handle-data-transport-process-error.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterDeletionOfLibraryService }
	from './run-tasks-after-deletion-of-library.service';
import { LibraryServicesModule } from '@app/routed-modules/library/library-services.module';


@Injectable({providedIn: LibraryServicesModule})
export class DeleteLibraryResultInterpreterService
	extends DataTransportProcessResultInterpreterService {

	constructor(
		__handleError: HandleDataTransportProcessErrorService,
		__runPostSuccessTasks: RunTasksAfterDeletionOfLibraryService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}