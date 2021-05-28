import {
	ActionMenuChoicesData as menuChoices, UserLibraryNamesData as libNames
} from '@runtime-state-data/static-classes/auto-resettable.data';
import { CurrentRouteService } from '@services/current-route.service';
import { MenuChoicesManager } from '@action-menu_module/menu-choices-manager.interface';
import { GlobalActionMenuServicesModule } from './global-action-menu-services.module';
import { Injectable } from '@angular/core';
import { MenuChoice } from '@action-menu_module/menu-choice.interface';
import { MenuChoiceLabelData as choiceLabel } from './menu-choice-label.data';
import { not } from '@writetome51/not';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { prepend } from '@writetome51/array-append-prepend';
import { removeByTest } from '@writetome51/array-remove-by-test';
import { SelectedImagesData as selectedImages } from '@runtime-state-data/selected-images.data';
import { SelectMutipleImagesSettingService }
	from '@browser-storage/select-mutiple-images-setting.service';
import { CheckableMenuChoice } from '@action-menu_module/checkable-menu-choice.interface';
import { getByTest } from '@writetome51/array-get-by-test';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class GlobalActionMenuChoicesManagerService implements MenuChoicesManager {

	constructor(
		private __currentRoute: CurrentRouteService,
		private __selectMultipleImagesSetting: SelectMutipleImagesSettingService
	) {}


	getChoices(): MenuChoice[] {
		this.manage();
		return menuChoices.global;
	}


	manage(data = undefined): void {
		if (!(menuChoices.global)) menuChoices.global = [];

		this.__includeSelectMultiple();

		if (data && data.imagesSelected) {
			this.__includeManipulateSelected();
		}
		else this.__removeManipulateSelected();
	}


	private __includeSelectMultiple() {
		if (this.__choicesIncludes(choiceLabel.selectMultipleImages)) return;

		let selectMultiple: CheckableMenuChoice = {
			label: choiceLabel.selectMultipleImages,
			data: {
				checked: this.__selectMultipleImagesSetting.get().enabled,
				toggleSetting: this.__selectMultipleImagesSetting
			}
		};
		prepend(selectMultiple, menuChoices.global);
	}


	private __includeManipulateSelected() {
		this.__includeAddSelected();
	}


	private __removeManipulateSelected() {
		this.__removeChoices([choiceLabel.addSelectedToLib, choiceLabel.deleteSelectedImages]);
	}


	private __includeAddSelected() {
		if (this.__choicesIncludes(choiceLabel.addSelectedToLib)) return;

		let choice: MenuChoice = {label: choiceLabel.addSelectedToLib};
		let _image_ids = selectedImages.data.map((img: { _id: string }) => img._id);

		choice['submenu'] = libNames.data.map((libName) => {
			return { label: libName, data: {_image_ids, libName} };
		});
		prepend(choice, menuChoices.global);
	}


	private __removeChoices(choiceLabels: string[]) {
		removeByTest(
			(choice: MenuChoice) => (choiceLabels.includes(choice.label)),
			menuChoices.global
		);
	}


	private __choicesIncludes(label: string): boolean {
		return getByTest(
			(choice: MenuChoice) => choice.label === label,
			menuChoices.global
		).length > 0;
	}

}
