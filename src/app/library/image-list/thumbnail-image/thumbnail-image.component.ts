import { Component, Input } from '@angular/core';
import { AppImage } from '../../../interfaces/app-image';
import { ImageDisplaySettingsService as imageDisplaySettings }
	from '../../../services/image/image-display-settings.service';
import { removeByIndex } from '@writetome51/array-remove-by-index';
import { LibraryService } from '../../../services/library/library.service';


@Component({
	selector: 'thumbnail-image',
	templateUrl: './thumbnail-image.component.html'
})
export class ThumbnailImageComponent {


	@Input() image: AppImage;
	@Input() index: number;
	hovered = false;


	constructor(private __library: LibraryService) {
	}


	get imageWidth(): number {
		return imageDisplaySettings.width;
	}


	deleteImage() {
		removeByIndex(this.index, this.__library.images);
	}


}
