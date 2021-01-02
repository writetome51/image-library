import { CheckableMenuChoice } from '@interfaces/checkable-menu-choice';
import { Component, Input } from '@angular/core';
import { hasValue } from '@writetome51/has-value-no-value';
import { MenuChoice } from '@interfaces/menu-choice';
import { MenuChoiceProcessorService } from '../../../menu-choice-processor.service';
import { RemoveParentLabelsForDisplayService as removeParentLabelsForDisplay }
	from '../remove-parent-labels-for-display.service';
import { StartDataProcessContainerComponent }
	from '@abstract-components/start-data-process-container.component';


@Component({
	selector: 'processable-menu-choice',
	templateUrl: './processable-menu-choice.component.html',
	styles: [`checkmark {position: relative; top: 5px; left: 5px;}`]
})
export class ProcessableMenuChoiceComponent extends StartDataProcessContainerComponent {

	@Input() data: MenuChoice | CheckableMenuChoice;


	get label(): string {
		return removeParentLabelsForDisplay.go(this.data.label);
	}


	get checked(): boolean {
		if (hasValue(this.data.data) && hasValue(this.data.data['checked'])) {
			return this.data.data['checked'];
		}
		else return false;
	}


	constructor(_menuChoiceProcessor: MenuChoiceProcessorService) {
		super(_menuChoiceProcessor);
	}

}
