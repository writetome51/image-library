import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';
import { Injectable } from '@angular/core';
import { LibraryPaginatorDataSourceService }
	from './library-paginator-data-source_service/library-paginator-data-source.service';
import { LibraryServicesModule } from '../library-services.module';


@Injectable({providedIn: LibraryServicesModule})
export class LibraryPaginatorService extends AppPaginatorService {

	constructor(__dataSource: LibraryPaginatorDataSourceService) {
		super(__dataSource);
	}

}