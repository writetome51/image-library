import { ProcessService } from './process.abstract.service';
import { GetResult } from '@interfaces/get-result.interface';
import { InterpretExistingUserDBOperationResultService }
	from '@interpret-result/interpret-existing-user-db-operation-result.abstract.service';


export abstract class ProcessExistingUserDBOperationService extends ProcessService {

	constructor(
		__getResult: GetResult,
		__interpretResult: InterpretExistingUserDBOperationResultService
	) {
		super(__getResult, __interpretResult);
	}

}
