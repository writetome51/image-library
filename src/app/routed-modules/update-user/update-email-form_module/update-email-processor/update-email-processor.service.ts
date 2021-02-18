import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UpdateEmailInputsService } from '../update-email-inputs/update-email-inputs.service';
import { InterpretUpdateEmailResultService } from './interpret-update-email-result.service';
import { UpdateEmailService } from './update-email.service';
import { UpdateUserServicesModule } from '@app/routed-modules/update-user/update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class UpdateEmailProcessorService extends FormDataTransportProcessorService {

	constructor(
		__validatingInputs: UpdateEmailInputsService,
		__getResult: UpdateEmailService,
		__interpretResult: InterpretUpdateEmailResultService
	) {
		super(__validatingInputs, __getResult, __interpretResult);
	}

}
