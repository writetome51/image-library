import { RestAPIRequestResultService } from '../rest-api-request-result.service';
import { Injectable } from '@angular/core';
import { UserLogoutOrDeletionResultProcessorService }
	from './user-logout-or-deletion-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class UserLogoutOrDeletionResultInterpreterService {


	constructor(
		private __userLogoutOrDeletionResultProcessor: UserLogoutOrDeletionResultProcessorService,
		private __restApiRequestResult: RestAPIRequestResultService
	) {
	}


	interpret(result): void {
		this.__restApiRequestResult.ifResultSuccessful_processResult(
			result,
			(result) => this.__userLogoutOrDeletionResultProcessor.process(result)
		);
	}


}
