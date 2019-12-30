import { Component } from '@angular/core';
import { CreatingNewLibraryService as creatingNewLibrary }
	from '../services/creating-new-library.service';


@Component({
	selector: 'libraries',
	templateUrl: './libraries.component.html'
})
export class LibrariesComponent {


	get creatingNewLibrary() {
		return creatingNewLibrary.status;
	}


	set creatingNewLibrary(value) {
		creatingNewLibrary.status = value;
	}


	get buttonText() {
		return (this.creatingNewLibrary ? 'Cancel' : 'Create New Library');
	}


}
