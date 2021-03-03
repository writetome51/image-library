import { LibraryImageTotalInBrowserStorageService }
	from '@services/browser-storage-related/library-image-total-in-browser-storage.service';
import { RunTasksAfterGettingImageTotalService }
	from '../../run-tasks-after-getting-image-total.abstract.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingLibraryImageTotalService
	extends RunTasksAfterGettingImageTotalService {

	constructor(__imageTotalInBrowser: LibraryImageTotalInBrowserStorageService) {
		super(__imageTotalInBrowser);
	}

}
