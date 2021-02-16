import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { DBUser } from '@interfaces/app-user/db-user.interface';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { HasError } from '@interfaces/has-error.interface';
import { SecurityQuestionServicesModule }
	from '@app/routed-modules/security-question/security-question-services.module';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class LoginBySecurityQuestionService implements IDoThis {

	constructor(private __realmFn: MongoDBRealmFunctionService) {
	}


	async go(): Promise<DBUser | HasError> {
		return await this.__realmFn.call('pub_loginBySecurityQuestionAndReturnUser',
			{email: currentUser.email, securityQuestion: currentUser.securityQuestion}
		);
	}

}
