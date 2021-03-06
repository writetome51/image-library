import { Injectable } from '@angular/core';
import { NewLibraryData } from '@runtime-state-data/new-library.data';
import { not } from '@writetome51/not';
import { ValidatingTextInputService } from '@writetome51/validating-inputs';
import { NewLibraryFormServicesModule } from './new-library-form-services.module';


@Injectable({providedIn: NewLibraryFormServicesModule})
export class LibraryNameInputService extends ValidatingTextInputService {

	constructor() {
		super();

		this.data.id = 'library-name-input';
		this.data.propertyToBind = 'name';
		this.data.objectToBind = NewLibraryData;
		this.data.label = 'Library Name';

		this.data.isValid = [
			() => (this.data.objectToBind[this.data.propertyToBind].length !== 0),
			() => (not(this.data.objectToBind[this.data.propertyToBind].includes(' ')))
		];
		this.data.errorMessage = [
			`The library name cannot be empty`,
			`The library name cannot include spaces`
		];
	}

}
