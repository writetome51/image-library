import { ActionMenuModule } from '@action-menu/action-menu.module';
import { CommonModule } from '@angular/common';
import { ImageActionMenuComponent } from './image-action-menu_component/image-action-menu.component';
import { NgModule } from '@angular/core';
import { ImageActionMenuServicesModule }
	from './image-action-menu-services.module';


@NgModule({
	declarations: [ImageActionMenuComponent],
	imports: [
		CommonModule,
		ActionMenuModule,
		ImageActionMenuServicesModule
	],
	exports: [ImageActionMenuComponent]
})
export class ImageActionMenuModule {
}