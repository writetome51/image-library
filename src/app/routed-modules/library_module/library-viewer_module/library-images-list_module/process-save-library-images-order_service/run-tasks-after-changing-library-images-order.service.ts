import { Injectable } from '@angular/core';
import { IfUpdatedLibraryIsBeingViewedThenReloadCurrentPageDataService }
	from '@library/if-updated-library-is-being-viewed-then-reload-current-page-data.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { LibraryRecord } from '@interfaces/library-record.interface';
import { UpdateLibrariesInBrowserStorageService } from '@library/update-libraries-in-browser-storage.service';
import { RunTasksAfterGettingLibraryFromDBService as runTasksAfterGettingLibraryFromDB }
	from '@run-post-success-tasks/run-tasks-after-getting-library-from-db.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterChangingLibraryImagesOrderService implements IDoThis {

	constructor(
		private __updateLibrariesInBrowser: UpdateLibrariesInBrowserStorageService,
		private __ifUpdatedLibraryIsBeingViewedThenReloadCurrentPageData:
			IfUpdatedLibraryIsBeingViewedThenReloadCurrentPageDataService
	) {}


	async go(updatedLibrary: LibraryRecord) {
		runTasksAfterGettingLibraryFromDB.go(updatedLibrary);

		this.__updateLibrariesInBrowser.go(updatedLibrary);
	}

}
