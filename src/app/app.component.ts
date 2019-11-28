import { AppModuleRouteService as moduleRoute} from './app-module-route.service';
import { AlertService as alert } from './services/alert.service';
import { Component, HostListener } from '@angular/core';
import { LocalSessionIDService } from './services/local-data/local-session-id.service';
import { Router } from '@angular/router';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	title = 'Image Libraries';
	alert = alert;
	moduleRoute = moduleRoute;


	// Adds keyup listener to document.
	@HostListener('document:keyup', ['$event'])
	onKeyup(event) {
		//	console.log(event);
	}


	get sessionIDExists() {
		return (this.__localSessionID.get());
	}


	get updateUserIsActive(): boolean {
		let url = this.__router.routerState.snapshot.url;
		return url.includes(`/${moduleRoute.UpdateUserModule}`);
	}


	constructor(
		private __localSessionID: LocalSessionIDService,
		private __router: Router
	) {
	}

}
