import { AppPaginatorDataSourceService } from './app-paginator-data-source.service';
import { DataTotalForLibraryService }
	from './data-total/data-total-for-library.service';
import { DBImage } from '../../../../interfaces/db-image';
import { GetLibraryProcessorService }
	from '../../data-transport-processor/get-images/get-library-processor.service';
import { Injectable } from '@angular/core';
import { LoadedImagesData as loadedImages }
	from '../../../../data-structures/runtime-state-data/static-classes/loaded-images.data';
import { LoadedLibraryData as loadedLibrary }
	from '../../../../data-structures/runtime-state-data/static-classes/loaded-library.data';


@Injectable({providedIn: 'root'})

export class LibraryPaginatorDataSourceService extends AppPaginatorDataSourceService {

	constructor(
		__getLibraryProcessor: GetLibraryProcessorService,
		__dataTotal: DataTotalForLibraryService
	) {
		super(__getLibraryProcessor, __dataTotal);
	}


	protected _getSomethingFrom_loadedImages(): DBImage[] {
		return loadedLibrary._image_ids.map((id) => loadedImages.data[id]);
	}

}
