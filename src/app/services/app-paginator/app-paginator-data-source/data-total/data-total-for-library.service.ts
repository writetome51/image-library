import { DataTotalService } from './data-total.service';
import { Injectable } from '@angular/core';
import { GetLibraryProcessorService }
	from '../../../data-transport-processor/get-images/get-library-processor.service';


@Injectable({providedIn: 'root'})

export class DataTotalForLibraryService extends DataTotalService {

	constructor(__set_dataTotal_Processor: GetLibraryProcessorService) {
		super(__set_dataTotal_Processor);
	}

}