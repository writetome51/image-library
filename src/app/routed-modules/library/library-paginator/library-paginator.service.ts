import { AppPaginatorService } from '@app-paginator/app-paginator.service';
import { Injectable } from '@angular/core';
import { LibraryPaginatorDataSourceService }
	from './library-paginator-data-source/library-paginator-data-source.service';
import { LibraryServicesModule } from '@app/routed-modules/library/library-services.module';


@Injectable({providedIn: LibraryServicesModule})
export class LibraryPaginatorService extends AppPaginatorService {

	constructor(__dataSource: LibraryPaginatorDataSourceService) {
		super(__dataSource);
	}

}