import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UpdateEmailInputsService } from '../update-email-inputs/update-email-inputs.service';
import { UpdateEmailResultInterpreterService } from './update-email-result-interpreter.service';
import { UpdateEmailService } from './update-email.service';


@Injectable({providedIn: 'root'})
export class UpdateEmailProcessorService extends FormDataTransportProcessorService {

	constructor(
		__validatingInputs: UpdateEmailInputsService,
		__getResult: UpdateEmailService,
		__resultInterpreter: UpdateEmailResultInterpreterService
	) {
		super(__validatingInputs, __getResult, __resultInterpreter);
	}

}