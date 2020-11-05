import { ActionMenuModule } from '@action-menu/action-menu.module';
import { CommonModule } from '@angular/common';
import { GlobalActionMenuChoicesManagerService } from './global-action-menu-choices-manager.service';
import { GlobalActionMenuComponent } from './global-action-menu.component';
import { NgModule } from '@angular/core';
import { GlobalMenuChoicesProcessorService } from '@global-action-menu/global-menu-choices-processor.service';
import { DeleteSelectedImagesResultInterpreterService }
	from './delete-selected-images-processor/delete-selected-images-result-interpreter.service';
import { DeleteSelectedImagesProcessorService }
	from './delete-selected-images-processor/delete-selected-images-processor.service';
import { RunTasksAfterDeletingImagesService }
	from './delete-selected-images-processor/run-tasks-after-deleting-images.service';


@NgModule({
	declarations: [GlobalActionMenuComponent],
	imports: [CommonModule, ActionMenuModule],
	providers: [
		GlobalActionMenuChoicesManagerService,
		GlobalMenuChoicesProcessorService,
		DeleteSelectedImagesResultInterpreterService,
		DeleteSelectedImagesProcessorService,
		RunTasksAfterDeletingImagesService
	],
	exports: [GlobalActionMenuComponent]
})
export class GlobalActionMenuModule {
}
