import { appName } from '@string-constants/app-name';
import { Component } from '@angular/core';
import { ClickStartedExecutionStatusData }
	from '@runtime-state-data/click-started-execution-status.data';
import { DeletingAllUserImagesProgressData }
	from '@runtime-state-data/deleting-all-user-images-progress.data';
import { GetFormattedPageTitleService as getFormattedPageTitle }
	from '@services/get-formatted-page-title.service';
import { ProcessDeleteUserService }
	from './process-delete-user_service/process-delete-user.service';
import { Title } from '@angular/platform-browser';
import { UpdateUserModuleTitleData as parentModuleTitle } from '../update-user-module-title.data';


@Component({
	selector: 'delete-user-form',
	template: `
		<progress-bar *ngIf="deleting" [progress]="progress" [label]="'Deleting files: '">
		</progress-bar>

		<delete-user-form-instructions></delete-user-form-instructions>

		<delete-user-form-inputs clearFormOnInit clearAlertsOnDestroy></delete-user-form-inputs>
		<submit-form-button [label]="'Delete'" [iDoThis]="process"></submit-form-button>
	`
})
export class DeleteUserFormComponent {

	progress = DeletingAllUserImagesProgressData;
	executionStatus = ClickStartedExecutionStatusData;


	get deleting(): boolean {
		return this.executionStatus.waiting;
	}


	constructor(
		public process: ProcessDeleteUserService,
		private __title: Title
	) {
		this.__title.setTitle(
			getFormattedPageTitle.go([appName, parentModuleTitle, 'Delete Account'])
		);
	}

}
