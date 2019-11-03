import { Component } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { DataOperationStatusService } from '../services/data-operation-status.service';


@Component({
	selector: 'app-introduction',
	templateUrl: './introduction.component.html'
})
export class IntroductionComponent {


	introduction = `This application lets you create libraries of images.  Inside each library you can 
	rename images, rearrange their order, add descriptions, tags, and do searches.`;


	constructor(
		public dataOperationStatus: DataOperationStatusService,
		public alert: AlertService
	) {
	}


}
