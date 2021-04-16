import { BackgroundExecutionStatusData as executionStatus }
	from '@runtime-state-data/background-execution-status.data';
import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { GetLibraryRouteParamsObserverService }
	from './get-library-route-params-observer_service/get-library-route-params-observer.service';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { RouteParametersSubscriberComponent }
	from '@abstract-components/route-parameters-subscriber.abstract.component';


@Component({
	selector: 'app-library',
	template: `
		<header><h2>{{name}}</h2></header>

		<big-loading-spinner *ngIf="gettingImages"></big-loading-spinner>

		<library-viewer *ngIf="!(gettingImages)"></library-viewer>
	`
})
export class LibraryComponent extends RouteParametersSubscriberComponent {

	get name() {
		return requestedLibrary.name;
	}


	get gettingImages(): boolean {
		return executionStatus.waiting;
	}


	constructor(
		__currentRoute: CurrentRouteService,
		__getRouteParamsObserver: GetLibraryRouteParamsObserverService
	) {
		super(__currentRoute, __getRouteParamsObserver);
	}

}
