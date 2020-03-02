import { Injectable } from '@angular/core';
import { ItemBeingMoved } from '../../interfaces/item-being-moved';
import { ListItemMoverService } from '../list-item-mover.service';
import { Subscription, Unsubscribable } from 'rxjs';


@Injectable({providedIn: 'root'})

export class ReArrangedImagesChangeDetectorService {

	subscription: Unsubscribable;


	constructor(
		private __listItemMover: ListItemMoverService
	) {
		this.subscription = this.__listItemMover.subscribable.subscribe(
			(imageBeingMoved: ItemBeingMoved) => {

			}
		);
	}


	getChanges(itemBeingMoved: ItemBeingMoved): object {
		let changes = {};


		return changes;
	}

}
