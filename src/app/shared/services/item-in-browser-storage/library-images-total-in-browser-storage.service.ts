import { Injectable } from '@angular/core';
import { ItemInBrowserStorageService } from './item-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class LibraryImagesTotalInBrowserStorageService extends ItemInBrowserStorageService<number> {

	constructor() {
		super(localStorage, 'lib-img-total');
	}

}
