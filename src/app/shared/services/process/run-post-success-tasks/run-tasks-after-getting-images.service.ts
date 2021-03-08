import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageBatch } from '@interfaces/image-batch.interface';
import { Injectable } from '@angular/core';
import { LoadedImageStateService }
	from '@services/loaded-image-state_service/loaded-image-state.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingImagesService implements IDoThis {

	constructor(private __loadedImageState: LoadedImageStateService) {
	}


	async go(result: ImageBatch) {
		this.__loadedImageState.setLoadedImages(result);
	}

}