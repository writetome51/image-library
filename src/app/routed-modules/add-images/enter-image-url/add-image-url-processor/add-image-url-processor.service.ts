import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { ImageURLInputService } from '../image-url-input.service';
import { Injectable } from '@angular/core';
import { SaveNewImagesResultInterpreterService }
	from '../../save-new-images-result-interpreter/save-new-images-result-interpreter.service';
import { AddImageURLService } from './add-image-url.service';


@Injectable({providedIn: 'root'})
export class AddImageURLProcessorService extends FormDataTransportProcessorService {

	constructor(
		__validatingInput: ImageURLInputService,
		__getResult: AddImageURLService,
		__resultInterpreter: SaveNewImagesResultInterpreterService
	) {
		super(__validatingInput, __getResult, __resultInterpreter);
	}

}