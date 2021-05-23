import { AlertsService as alerts } from '@services/alerts.service';
import { DeletingAllUserFilesProgressData as deletingAllUserFilesProgress }
	from '@runtime-state-data/deleting-all-user-files-progress.data';
import { UploadingFilesProgressData as uploadingFilesProgress }
	from '@runtime-state-data/uploading-files-progress.data';


export class AppMessageCenterVisibilityService {

	static get visible(): boolean {
		return (
			alerts.get().length > 0 ||
			deletingAllUserFilesProgress.percentageComplete > 0 ||
			uploadingFilesProgress.percentageComplete > 0
		);
	}


	static clear() {
		alerts.clearAll();
		deletingAllUserFilesProgress.percentageComplete = 0;
		uploadingFilesProgress.percentageComplete = 0;
	}

}
