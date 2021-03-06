import { Component } from '@angular/core';
import { NewLibraryData as newLibrary } from '@runtime-state-data/new-library.data';


@Component({
	selector: 'new-library-button',
	template: `
		<div class="input-container">
			<button class="btn btn-default" (click)="creatingNewLibrary = !(creatingNewLibrary)">
				{{label}}
			</button>
		</div>
	`
})
export class NewLibraryButtonComponent {

	get creatingNewLibrary(): boolean {
		return newLibrary.beingCreated;
	}

	set creatingNewLibrary(value){
		newLibrary.beingCreated = value;
	}

	get label() {
		return (this.creatingNewLibrary ? 'Cancel' : 'New Library');
	}

}
