import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-session-id.service';
import { hasValue } from '@writetome51/has-value-no-value';


@Injectable({providedIn: 'root'})
export class AuthenticatedGuard implements CanActivate {

	constructor(
		private __localSessionID: LocalSessionIDService,
		private __router: Router
	) {
	}


	canActivate(): boolean {
		return this.__ifSessionIDExists_returnTrue_ifNot_redirectToLoginAndReturnFalse();
	}


	private __ifSessionIDExists_returnTrue_ifNot_redirectToLoginAndReturnFalse(): boolean {

		if (hasValue(this.__localSessionID.get())) return true;

		this.__router.navigate(['/']);
		return false;
	}

}