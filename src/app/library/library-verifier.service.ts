import { noValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { GetLibrariesProcessorService }
	from '../services/data-transport-processor/get-libraries-processor.service';
import { LibraryNamesData as libraryNames }
	from '../../data-structures/runtime-state-data/static-classes/library-names.data';
import { isEmpty } from '@writetome51/is-empty-not-empty';


@Injectable({providedIn: 'root'})

export class LibraryVerifierService {

	constructor(private __getLibrariesProcessor: GetLibrariesProcessorService) {
	}


	async verify(libName): Promise<boolean> {
		if (noValue(libraryNames.data) || isEmpty(libraryNames.data)) {
			await this.__getLibrariesProcessor.process();
		}
		return libraryNames.data.includes(libName);
	}

}
