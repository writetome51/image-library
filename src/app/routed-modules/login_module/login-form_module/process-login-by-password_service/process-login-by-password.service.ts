import { ProcessSendFormDataService }
	from '@process/process-send-form-data.abstract.service';
import { Injectable } from '@angular/core';
import { InterpretLoginResultService } from '@interpret-result/interpret-login-result.service';
import { LoginByPasswordService } from './login-by-password.service';
import { LoginFormInputsService } from '../login-form-inputs.service';
import { LoginFormServicesModule } from '../login-form-services.module';


@Injectable({providedIn: LoginFormServicesModule})
export class ProcessLoginByPasswordService extends ProcessSendFormDataService {

	constructor(
		__validatingInputs: LoginFormInputsService,
		__getResult: LoginByPasswordService,
		__interpretResult: InterpretLoginResultService
	) {
		super(__validatingInputs, __getResult, __interpretResult);
	}

}
