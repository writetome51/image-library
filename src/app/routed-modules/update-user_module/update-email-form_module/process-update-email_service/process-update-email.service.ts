import { ProcessSendFormDataService }
	from '@process/process-send-form-data.abstract.service';
import { Injectable } from '@angular/core';
import { UpdateEmailInputsService }
	from '../update-email-inputs_service/update-email-inputs.service';
import { InterpretUpdateEmailResultService }
	from './interpret-update-email-result_service/interpret-update-email-result.service';
import { UpdateEmailService } from './update-email.service';
import { UpdateUserServicesModule } from '../../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class ProcessUpdateEmailService extends ProcessSendFormDataService {

	constructor(
		__validatingInputs: UpdateEmailInputsService,
		__getResult: UpdateEmailService,
		__interpretResult: InterpretUpdateEmailResultService
	) {
		super(__validatingInputs, __getResult, __interpretResult);
	}

}
