import { Component, Input } from '@angular/core';
import { DBImage } from '@interfaces/app-image/db-image.interface';
import { Hoverable } from '@interfaces/hoverable.interface';
import { HoverableContainerComponent } from '@hoverable-container/hoverable-container.component';
import { ImageSelectorService as imageSelector } from './image-selector.service';
import { not } from '@writetome51/not';


@Component({
	selector: 'thumbnail-image-container',
	templateUrl: './thumbnail-image-container.component.html',
	styleUrls: ['./thumbnail-image-container.component.css']
})
export class ThumbnailImageContainerComponent implements Hoverable {

	@Input() image: DBImage;
	@Input() imageRouterLink: (string[] | string) = [];

	// if selectEnabled is true, hovering is disabled and the image has no routerLink.
	@Input() selectEnabled = false;

	@Input() deleteGlyphiconEnabled = false;


	isHovered(container: HoverableContainerComponent): boolean {
		return (this.selectEnabled ? false : container.isHovered());
	}


	toggleSelect(): void {
		if (not(this.selectEnabled)) return;
		imageSelector.toggleSelect(this.image);
	}


	getRouterLink(): string[] | string {
		if (this.selectEnabled) {
			return [];
		}
		else {
			return this.imageRouterLink;
		}
	}

}
