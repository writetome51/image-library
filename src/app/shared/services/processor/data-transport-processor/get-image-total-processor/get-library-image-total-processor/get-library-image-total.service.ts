import { Injectable } from '@angular/core';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { LibrariesInBrowserStorageService }
	from '@item-in-browser-storage/libraries-in-browser-storage.service';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class GetLibraryImageTotalService implements IDoThis {

	constructor(private __librariesInBrowser: LibrariesInBrowserStorageService) {
	}

	async go(): Promise<{ dataTotal: number } | { error: { message: string } }> {
		try {
			let lib = this.__librariesInBrowser.get()[requestedLibrary.name];
			return {dataTotal: lib._image_ids.length};
		}
		catch (error) {
			return {error};
		}
	}

}