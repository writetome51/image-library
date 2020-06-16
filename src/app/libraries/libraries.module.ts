import { AddImagesComponent } from './add-images/add-images.component';
import { AddImageUrlButtonComponent }
	from './add-images/enter-image-url/add-image-url-button.component';
import { AppPaginationControlsModule } from '../app-pagination-controls/app-pagination-controls.module';
import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { BigLoadingSpinnerModule } from '../big-loading-spinner/big-loading-spinner.module';
import { ChooseImagesFromDeviceComponent }
	from './add-images/choose-images-from-device/choose-images-from-device.component';
import { CommonModule } from '@angular/common';
import { CreateLibraryButtonComponent } from './new-library-form/create-library-button.component';
import { EnterImageURLComponent } from './add-images/enter-image-url/enter-image-url.component';
import { FormsModule } from '@angular/forms';
import { LibrariesComponent } from './libraries.component';
import { LibrariesListComponent } from './libraries-list/libraries-list.component';
import { LibrariesModuleRoutesData as moduleRoutes } from './libraries-module-routes.data';
import { NgModule } from '@angular/core';
import { NewLibraryFormComponent } from './new-library-form/new-library-form.component';
import { NewLibraryFormInputsComponent } from './new-library-form/new-library-form-inputs.component';
import { NewLibraryButtonComponent } from './new-library-button.component';
import { StartDataProcessButtonModule }
	from '../start-data-process-button/start-data-process-button.module';
import { RouterModule } from '@angular/router';
import { ThumbnailImageModule } from '../thumbnail-image/thumbnail-image.module';
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';


@NgModule({
	declarations: [
		AddImageUrlButtonComponent,
		AddImagesComponent,
		ChooseImagesFromDeviceComponent,
		CreateLibraryButtonComponent,
		EnterImageURLComponent,
		LibrariesComponent,
		LibrariesListComponent,
		NewLibraryFormComponent,
		NewLibraryFormInputsComponent,
		NewLibraryButtonComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		BigLoadingSpinnerModule,
		ThumbnailImageModule,
		AppPaginationControlsModule,
		ValidatingInputsModule,
		StartDataProcessButtonModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: LibrariesComponent,
				canActivate: [AuthenticatedGuard]
			},

			{
				path: moduleRoutes.AddImagesComponent,
				component: AddImagesComponent,
				canActivate: [AuthenticatedGuard]
			},

			{path: '**', redirectTo: ''}
		])
	]
})
export class LibrariesModule {
}
