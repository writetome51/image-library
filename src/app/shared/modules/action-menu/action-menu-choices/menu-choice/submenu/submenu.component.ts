import { Component, Input } from '@angular/core';
import { LabelledMenuChoiceComponent } from '@menu-choice/labelled-menu-choice.component';


@Component({
	selector: 'submenu',
	template: `
		<ng-container>
			<div class="label-container">
				{{ label }} <submenu-pointer></submenu-pointer>
			</div>

			<ul *ngIf="clicked" class="dropdown-menu">
				<menu-choice *ngFor="let choice of data.submenu" [data]="choice"></menu-choice>
			</ul>
		</ng-container>
	`
})
export class SubmenuComponent extends LabelledMenuChoiceComponent {

	@Input() clicked = false;

}
