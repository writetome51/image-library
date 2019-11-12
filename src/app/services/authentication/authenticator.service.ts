import { Injectable } from '@angular/core';
import { AuthenticationRestAPIService } from './authentication-rest-api.service';
import { CurrentUserService as currentUser} from '../user/current-user.service';
import { GetObjectFromSubscriptionService as getObjectFromSubscription}
	from '../get-object-from-subscription.service';


@Injectable({
	providedIn: 'root'
})
export class AuthenticatorService {

	constructor(private __authenticationRestApi: AuthenticationRestAPIService) {
	}


	async authenticate() {
		return await getObjectFromSubscription.go(
			this.__authenticationRestApi.login(
				{email: currentUser.email, password: currentUser.password}
			)
		);
	}
}
