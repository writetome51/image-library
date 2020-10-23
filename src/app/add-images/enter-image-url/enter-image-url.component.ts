import { Component } from '@angular/core';


@Component({
	selector: 'enter-image-url',
	template: `
		<image-url-form-input clearFormOnInit clearAlertOnDestroy></image-url-form-input>
		<add-image-url-button></add-image-url-button>
	`
})
export class EnterImageURLComponent {
}
