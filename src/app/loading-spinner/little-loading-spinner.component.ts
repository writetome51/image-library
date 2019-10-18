import { Component } from '@angular/core';


@Component({
	selector: 'little-loading-spinner',
	template: `
		<div>
			<img [src]="littleSpinner.src" [width]="littleSpinner.width" alt="Waiting for response"/>
		</div>
	`,
	styles: [`div { position: relative; }`]
})
export class LittleLoadingSpinnerComponent {


	littleSpinner = {
		src: '../../assets/loading-spinner-50.gif',
		width: 51,
		height: 51,
	};


}