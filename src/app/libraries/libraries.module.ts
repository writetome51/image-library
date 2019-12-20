import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { CommonModule } from '@angular/common';
import { CreateLibraryButtonComponent } from './new-library-form/create-library-button.component';
import { FormsModule } from '@angular/forms';
import { LibrariesComponent } from './libraries.component';
import { LibrariesListComponent } from './libraries-list/libraries-list.component';
import { NgModule } from '@angular/core';
import { NewLibraryFormComponent } from './new-library-form/new-library-form.component';
import { NewLibraryFormInputsComponent } from './new-library-form/new-library-form-inputs.component';
import { ProcessingButtonModule } from '../processing-button/processing-button.module';
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [
		CreateLibraryButtonComponent,
		LibrariesComponent,
		LibrariesListComponent,
		NewLibraryFormComponent,
		NewLibraryFormInputsComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		ValidatingInputsModule,
		ProcessingButtonModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: LibrariesComponent,
				canActivate: [AuthenticatedGuard]
			},

			{path: '**', redirectTo: ''}
		])
	]
})
export class LibrariesModule {
}