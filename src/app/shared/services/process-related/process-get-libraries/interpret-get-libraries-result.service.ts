import { Injectable } from '@angular/core';
import { RunTasksAfterGettingLibrariesService } from './run-tasks-after-getting-libraries.service';
import { HandleDataTransportErrorService }
	from '@services/process-related/handle-data-transport-error/handle-data-transport-error.service';
import { InterpretDataTransportResultService }
	from '@services/process-related/interpret-data-transport-result.service';


@Injectable({providedIn: 'root'})
export class InterpretGetLibrariesResultService extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleDataTransportErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingLibrariesService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}