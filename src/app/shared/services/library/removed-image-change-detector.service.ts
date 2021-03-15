import { Injectable } from '@angular/core';
import { Subscription, Unsubscribable } from 'rxjs';
import { ListItemRemoverService } from '../../../routed-modules/library_module/library-viewer_module/image-list_module/list-item-remover.service';
import { LibraryChangesService } from './library-changes.service';
// import { getCopy } from '@writetome51/array-get-copy';


@Injectable({providedIn: 'root'})
export class RemovedImageChangeDetectorService {

	subscription: Unsubscribable;

	/**************
	constructor(
		private __imagesToDisplay: DisplayedImagesService,
		private __listItemRemover: ListItemRemoverService,
		private __libraryChanges: LibraryChangesService
	) {
		this.subscription = this.__listItemRemover.itemBeingRemoved.subscribe(
			(removalInfo: { indexBeingRemoved: number, previousLength: number }) => {
				if (removalInfo.indexBeingRemoved === 0) {
					this.__libraryChanges.data['images'] = getCopy(this.__imagesToDisplay.data);
				}
				else {
					let changeCount = (removalInfo.previousLength - removalInfo.indexBeingRemoved - 1);
					for (let i = removalInfo.indexBeingRemoved; i <= changeCount; ++i) {
						this.__libraryChanges.data[`images.${i}`] = this.__imagesToDisplay.data[i];
					}
				}
			}
		);
	}
	getChanges(itemBeingRemoved: ItemBeingRemoved): object {
		let changes = {};
		return changes;
	}
	 *********************/

}
