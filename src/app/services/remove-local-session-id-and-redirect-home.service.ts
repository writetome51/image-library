import { Injectable } from '@angular/core';
import { LocalSessionIDService } from './authentication/local-session-id.service';
import { Router } from '@angular/router';
import { IDoThis } from '../interfaces/i-do-this';


@Injectable({
	providedIn: 'root'
})
export class RemoveLocalSessionIDAndRedirectHomeService implements IDoThis {

	constructor(
		private __localSessionID: LocalSessionIDService,
		private __router: Router
	) {
	}


	async go() {
		this.__localSessionID.remove();
		await this.__router.navigate(['/']); // logged-out homepage.
	}

}
