import { Injectable } from '@angular/core';
import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { GetImagesResultInterpreterService }
	from '@get-images-processor/get-images-result-interpreter/get-images-result-interpreter.service';
import { GetLibraryImagesService } from './get-library-images.service';


@Injectable({providedIn: 'root'})
export class GetLibraryImagesProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: GetLibraryImagesService,
		__resultInterpreter: GetImagesResultInterpreterService
	) {
		super(__getResult, __resultInterpreter);
	}

}
