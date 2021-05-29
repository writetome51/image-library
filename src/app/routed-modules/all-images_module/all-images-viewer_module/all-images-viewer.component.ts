import { AllImagesPaginatorService }
	from '../all-images-paginator_service/all-images-paginator.service';
import { AllImagesJumpToPageInputService } from '../all-images-jump-to-page-input.service';
import { AppModulePathData as appModulePath } from '@app/app-module-path.data';
import { Component } from '@angular/core';
import { ImagesViewerContextDirective }
	from '@app/shared/abstract-directives/images-viewer-context.abstract.directive';
import { UserImageTotalInBrowserStorageService }
	from '@browser-storage/user-image-total-in-browser-storage.service';


@Component({
	selector: 'all-images-viewer',
	template: `
		<images-viewer [context]="this" [noImagesMessage]="'You have no images in your account.'">
			<all-images-list [data]="images"></all-images-list>
		</images-viewer>
	`
})
export class AllImagesViewerComponent extends ImagesViewerContextDirective {

	routeBeforePageNumber = `${appModulePath.AllImagesModule}/page`;


	constructor(
		__storedImageTotal: UserImageTotalInBrowserStorageService,
		public paginator: AllImagesPaginatorService,
		public jumpToPageInput: AllImagesJumpToPageInputService
	) {
		super(__storedImageTotal);
	}

}
