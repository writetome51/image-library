import { AlertModule } from './alert/alert.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EmailPasswordFormInputsModule }
	from './email-password-form-inputs/email-password-form-inputs.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IntroductionComponent } from './introduction/introduction.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { LoadingSpinnerModule } from './loading-spinner/loading-spinner.module';
import { LoginFormComponent } from './introduction/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { ValidatingInputsModule } from './validating-inputs/validating-inputs.module';
import { InnerAppContainerComponent } from './inner-app-container/inner-app-container.component';


@NgModule({
	declarations: [
		AppComponent,
		InnerAppContainerComponent,
		IntroductionComponent,
		LibrariesComponent,
		LoginFormComponent,
		PageNotFoundComponent,
		ForgotPasswordComponent,
		ChangePasswordComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AlertModule,
		LoadingSpinnerModule,
		ValidatingInputsModule,
		EmailPasswordFormInputsModule,
		AppRoutingModule, // must be loaded before any other routing module.
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
