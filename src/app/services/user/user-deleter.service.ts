import { CurrentUserData as currentUser } from '../../data/runtime-state-data/current-user.data';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { UserRestAPIService } from './user-rest-api.service';
import { GetObjectFromSubscriptionService as getObjectFromSubscription}
	from '../get-object-from-subscription.service';


@Injectable({providedIn: 'root'})

export class UserDeleterService {

	constructor(
		private __userRestApi: UserRestAPIService,
		private __localSessionID: LocalSessionIDService,
	) {
	}


	async delete(): Promise<any> {
		return await getObjectFromSubscription.go(
			this.__userRestApi.delete({
				email: currentUser.email,
				password: currentUser.password,
				sessionID: this.__localSessionID.get()
			})
		);
	}


}
