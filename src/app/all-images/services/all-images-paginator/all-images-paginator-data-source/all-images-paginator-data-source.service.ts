import { AppPaginatorDataSourceService }
	from '@app-paginator/app-paginator-data-source/app-paginator-data-source.service';
import { AllImagesDataTotalService } from './all-images-data-total.service';
import { GetAllImagesProcessorService } from './get-all-images-processor.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class AllImagesPaginatorDataSourceService extends AppPaginatorDataSourceService {

	constructor(
		__getAllImagesProcessor: GetAllImagesProcessorService,
		__dataTotal: AllImagesDataTotalService
	) {
		super(__getAllImagesProcessor, __dataTotal);
	}

}
