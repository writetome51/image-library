import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationControlsComponent } from './pagination-controls.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';


@NgModule({
	declarations: [PaginationControlsComponent],
	imports: [
		CommonModule,
		FormsModule,
		ValidatingInputsModule,
		RouterModule
	],
	exports: [PaginationControlsComponent]
})
export class PaginationControlsModule {
}