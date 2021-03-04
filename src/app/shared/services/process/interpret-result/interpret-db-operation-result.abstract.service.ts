import { HandleDbOperationErrorService }
	from '@handle-db-operation-error_service/handle-db-operation-error.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { InterpretResultService } from './interpret-result.abstract.service';


export abstract class InterpretDbOperationResultService extends InterpretResultService {

	constructor(
		__handleError: HandleDbOperationErrorService,
		__runPostSuccessTasks: IDoThis
	) {
		super(__handleError, __runPostSuccessTasks);
	}

}
