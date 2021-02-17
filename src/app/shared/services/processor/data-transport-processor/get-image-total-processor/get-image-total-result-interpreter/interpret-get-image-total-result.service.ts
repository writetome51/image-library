import { InterpretDataTransportResultService }
	from '../../interpret-data-transport-result/interpret-data-transport-result.service';
import { HandleGetImageTotalErrorService }
	from './handle-get-image-total-error.service';
import { RunTasksAfterGettingImageTotalService }
	from './run-tasks-after-getting-image-total.service';


export abstract class GetImageTotalResultInterpreterService
	extends InterpretDataTransportResultService {

	constructor(
		__handleError: HandleGetImageTotalErrorService,
		__runPostSuccessTasks: RunTasksAfterGettingImageTotalService
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}