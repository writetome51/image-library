import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePasswordFormComponent } from './update-password-form.component';
import { UpdatePasswordFormInputsComponent } from './update-password-form-inputs.component';
import { SubmitFormButtonModule } from '@submit-form-button_module/submit-form-button.module';
import { ClearFormOnInitModule } from '@clear-form-on-init_module/clear-form-on-init.module';
import { ClearAlertsOnDestroyModule }
	from '@clear-alerts-on-destroy_module/clear-alerts-on-destroy.module';
import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs_module/app-validating-form-inputs.module';


@NgModule({
	declarations: [
		UpdatePasswordFormComponent,
		UpdatePasswordFormInputsComponent,
	],
	imports: [
		CommonModule,
		SubmitFormButtonModule,
		ClearFormOnInitModule,
		ClearAlertsOnDestroyModule,
		AppValidatingFormInputsModule
	],
	exports: [UpdatePasswordFormComponent]
})
export class UpdatePasswordFormModule {}
