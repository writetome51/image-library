import { batchDoesntExist } from '@string-constants/mongo-db-realm-function-errors';
import { Injectable } from '@angular/core';
import { HandleExistingUserDBOperationErrorService }
	from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-existing-user-db-operation-error.service';
import { HandleNoRecordMatchErrorService }
	from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-no-record-match-error.service';
import { HandleNotLoggedInErrorService }
	from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-not-logged-in-error.service';
import { LoadedImageStateService }
	from '@services/loaded-image-state_service/loaded-image-state.service';


@Injectable({providedIn: 'root'})
export class HandleGetImagesErrorService extends HandleExistingUserDBOperationErrorService {

	constructor(
		private __loadedImageState: LoadedImageStateService,
		__handleNoRecordMatchError: HandleNoRecordMatchErrorService,
		__handleNotLoggedInError: HandleNotLoggedInErrorService,
	) {
		super(__handleNoRecordMatchError, __handleNotLoggedInError);
	}


	async go(error: { message: string }) {
		this.__loadedImageState.setDefault();

		if (error.message.includes(batchDoesntExist)) return; // Don't show to user.
		else await super.go(error);
	}

}
