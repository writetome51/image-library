import { AppModuleRouteService } from '../app-module-route.service';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { CurrentLibrarySetterService as librarySetter }
	from '../services/library/current-library-setter.service';
import { DBLibrary } from '../interfaces/db-library';
import { hasValue, noValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { LibraryData as library } from '../data/runtime-state-data/library.data';
import { LibraryStorageService } from '../services/library/library-storage.service';
import { LibraryVerificationStatusData as libVerificationStatus }
	from '../data/runtime-state-data/library-verification-status.data';
import { not } from '@writetome51/not';
import { RequestedLibraryData as requestedLibrary }
	from '../data/runtime-state-data/requested-library.data';


@Injectable({providedIn: 'root'})

export class LibraryVerificationGuard implements CanActivate {

	constructor(
		private __libraryStorage: LibraryStorageService,
		private __router: Router
	) {
	}


	async canActivate(next: ActivatedRouteSnapshot): Promise<boolean> {
		requestedLibrary.name = next.url.toString();

		await this.__loadRequestedLibrary_ifItExists(requestedLibrary.name);

		if (this.__isFound(library)) return true;
		else return this.__redirectToLibrariesAndReturnFalse();
	}


	private async __loadRequestedLibrary_ifItExists(requestedLibraryName): Promise<void> {
		if (noValue(library.data) || requestedLibraryName !== library.data.name) {

			libVerificationStatus.waitingForResult = true;

			let result: DBLibrary | { error: object } =
				await this.__libraryStorage.get(requestedLibraryName);

			// @ts-ignore
			if (not(result.error)) librarySetter.set(result);
			else librarySetter.unset(); // because library wasn't found.

			libVerificationStatus.waitingForResult = false;
		}
	}


	private __isFound(library): boolean {
		return hasValue(library.data);
	}


	private __redirectToLibrariesAndReturnFalse() {
		this.__router.navigate([`/${AppModuleRouteService.LibrariesModule}`]);
		return false;
	}


}
