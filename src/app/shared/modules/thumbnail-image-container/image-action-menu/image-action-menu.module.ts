import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageActionMenuComponent } from './image-action-menu.component';
import { ImageActionMenuChoicesManagerService }
	from './image-action-menu-choices-manager.service';
import { ActionMenuModule } from '@action-menu/action-menu.module';
import { ImageActionMenuChoicesExecutorService }
	from './image-action-menu-choices-executor.service';


@NgModule({
	declarations: [ImageActionMenuComponent],
	imports: [
		CommonModule,
		ActionMenuModule
	],
	providers: [
		ImageActionMenuChoicesManagerService,
		ImageActionMenuChoicesExecutorService
	],
	exports: [ImageActionMenuComponent]
})
export class ImageActionMenuModule {
}
