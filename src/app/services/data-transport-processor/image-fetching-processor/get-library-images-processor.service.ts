import { Injectable } from '@angular/core';
import { DBImage } from '../../../../interfaces/db-image';
import { GetImagesProcessorService } from './get-images-processor.service';


@Injectable({providedIn: 'root'})

// Only use this class' .process() method after calling
// GetLibraryProcessorService.process() first, and making sure the
// resulting _image_ids array contains items.

export class GetLibraryImagesProcessorService extends GetImagesProcessorService {

	protected async _getResult(): Promise<DBImage[] | { error: object }> {
		return await this._getImagesFromStorage.inLibrary();
	}

}
