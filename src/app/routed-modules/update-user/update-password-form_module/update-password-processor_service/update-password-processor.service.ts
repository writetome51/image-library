import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UpdatePasswordInputsService }
	from '../update-password-inputs_service/update-password-inputs.service';
import { InterpretUpdatePasswordResultService }
	from './interpret-update-password-result.service';
import { UpdatePasswordService } from './update-password.service';
import { UpdateUserServicesModule } from '@app/routed-modules/update-user/update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class UpdatePasswordProcessorService extends FormDataTransportProcessorService {

	constructor(
		__validatingInputs: UpdatePasswordInputsService,
		__getResult: UpdatePasswordService,
		__interpretResult: InterpretUpdatePasswordResultService
	) {
		super(__validatingInputs, __getResult, __interpretResult);
	}

}
