import { DataTransportProcessorService } from './data-transport-processor.service';
import { Injectable } from '@angular/core';
import { NewImageSaverService } from '../image/new-image-saver.service';
import { SaveNewImagesResultInterpreterService }
	from './data-transport-result-interpreter/save-new-images-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class SaveNewImagesProcessorService extends DataTransportProcessorService {

	constructor(
		private __newImageSaver: NewImageSaverService,
		__saveNewImagesResultInterpreter: SaveNewImagesResultInterpreterService
	) {
		super(__saveNewImagesResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__newImageSaver.save();
	}

}
