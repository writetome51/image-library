import { UserRecord } from '@interfaces/user-record.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { RedirectToLoggedInHomeService } from '@services/redirect-to-logged-in-home.service';
import { RunTasksAfterGettingUserService }
	from '@services/process/run-post-success-tasks/run-tasks-after-getting-user.service';
import { SecurityQuestionStatusData as securityQuestionStatus }
	from '@runtime-state-data/security-question-status.data';


@Injectable({providedIn: 'root'})
export class RunTasksAfterLoginService implements IDoThis {

	constructor(
		private __runTasksAfterGettingUser: RunTasksAfterGettingUserService,
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService
	) {}


	async go(result: UserRecord): Promise<void> {
		securityQuestionStatus.received = false;
		this.__runTasksAfterGettingUser.go(result);

		await this.__redirectToLoggedInHome.go();
	}

}
