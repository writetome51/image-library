import { Component } from '@angular/core';
import { MenuChoice } from '@interfaces/menu-choice.interface';
import { HasDataInputDirective } from '@abstract-directives/has-data-input.abstract.directive';


@Component({
	selector: 'action-menu-choices',
	template: `
		<ul class="dropdown-menu action-menu-choices">
			<menu-choice *ngFor="let choice of data" [data]="choice"></menu-choice>
		</ul>
	`,
	styleUrls: ['./action-menu-choices.component.css']
})
export class ActionMenuChoicesComponent extends HasDataInputDirective<MenuChoice[]> {}
