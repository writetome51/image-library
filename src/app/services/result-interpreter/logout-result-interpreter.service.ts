import { Injectable } from '@angular/core';
import { UserLogoutResultProcessorService }
	from '../user/user-logout-result-processor.service';
import { ResultInterpreterService } from './result-interpreter.service';
import { LogoutResultCheckService } from '../data-operation-result-check/logout-result-check.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutResultInterpreterService extends ResultInterpreterService {

	constructor(
		__logoutResultCheck: LogoutResultCheckService,
		__logoutResultProcessor: UserLogoutResultProcessorService
	) {
		super(__logoutResultCheck, __logoutResultProcessor);
	}

}