import { AllImagesPaginatorService }
	from '@app-paginator/all-images-paginator_service/all-images-paginator.service';
import { AllImagesServicesModule } from '../all-images-services.module';
import { Injectable } from '@angular/core';
import { JumpToPageInputService } from '@validating-input/jump-to-page-input.abstract.service';


@Injectable({providedIn: AllImagesServicesModule})
export class AllImagesJumpToPageInputService extends JumpToPageInputService {

	constructor(_paginator: AllImagesPaginatorService) {
		super(_paginator);
	}

}
