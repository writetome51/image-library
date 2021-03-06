import { AppModulePathData as appModulePath } from '@app/app-module-path.data';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})
export class RedirectToLoggedInHomeService implements IDoThis {

	constructor(private __router: Router) {}


	async go() {
		await this.__router.navigate([`/${appModulePath.LibrariesModule}`]);
	}

}
