import { Injectable } from '@angular/core';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { DBLibrary } from '../../../../interfaces/db-library';
import { LibraryNamesData as libraryNames }
	from '../../../../data-structures/runtime-state-data/static-classes/library-names.data';


@Injectable({providedIn: 'root'})

export class GetLibraryNamesResultProcessorService implements DirectProcessor {

	async process(result: DBLibrary[]) {
		libraryNames.data = result.map((library: DBLibrary) => library.name);
	}

}