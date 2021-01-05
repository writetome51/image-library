import { Injectable } from '@angular/core';
import { ItemInBrowserStorageService }
	from '@services/item-in-browser-storage/item-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class LocalSessionIDService extends ItemInBrowserStorageService<string> {

	constructor() {
		super(localStorage, 'lsd');
	}

}
