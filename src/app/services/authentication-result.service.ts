import { Injectable } from '@angular/core';
import { ErrorMessageService } from './error-message.service';
import { SessionIDLocalStorageService } from './session-id-local-storage.service';


@Injectable({
	providedIn: 'root'
})
export class AuthenticationResultService {

	constructor(
		private __error: ErrorMessageService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService,) {
	}


	interpretLogin(result) {
		if (typeof result === 'string') {
			result = JSON.parse(result);
		}
		if (result.email) {
			this.__sessionIDLocalStorage.set(result.sessionID);
		}
		else {
			this.__error.message = result['error'].message;
		}
	}


	interpretLogout(result) {
		if (typeof result === 'string' && JSON.parse(result).success) {
			this.__sessionIDLocalStorage.remove();
		}
		else {
			if (typeof result === 'string') result = JSON.parse(result);
			this.__error.message = result.error.message;
		}
	}


}
