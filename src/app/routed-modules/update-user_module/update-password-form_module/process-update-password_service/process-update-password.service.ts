import { ProcessSendFormDataToDbService }
	from '@process/process-send-form-data-to-db.abstract.service';
import { Injectable } from '@angular/core';
import { UpdatePasswordInputsService }
	from '../update-password-inputs_service/update-password-inputs.service';
import { InterpretUpdatePasswordResultService }
	from './interpret-update-password-result_service/interpret-update-password-result.service';
import { UpdatePasswordService } from './update-password.service';
import { UpdateUserServicesModule } from '../../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class ProcessUpdatePasswordService extends ProcessSendFormDataToDbService {

	constructor(
		__validatingInputs: UpdatePasswordInputsService,
		__getResult: UpdatePasswordService,
		__interpretResult: InterpretUpdatePasswordResultService
	) {
		super(__validatingInputs, __getResult, __interpretResult);
	}

}
