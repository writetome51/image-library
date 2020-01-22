import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateUserChoicesMapService } from './update-user-choices-map.service';


@Component({
	selector: 'update-user',
	templateUrl: './update-user.component.html'
})
export class UpdateUserComponent {

	heading = 'Update';
	choicesMap = UpdateUserChoicesMapService;
	choices = Object.keys(this.choicesMap);


	get formHeading() {
		let url = this.__router.routerState.snapshot.url;

		for (let i = 0; i < this.choices.length; ++i) {
			let map: { path: string, heading: string } = this.choicesMap[this.choices[i]];

			if (url.endsWith(`/${map.path}`)) {
				return map.heading;
			}
		}
	}


	constructor(private __router: Router) {
	}

}
