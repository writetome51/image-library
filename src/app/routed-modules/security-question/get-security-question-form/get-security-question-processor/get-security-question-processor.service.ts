import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { GetSecurityQuestionResultInterpreterService }
	from './get-security-question-result-interpreter/get-security-question-result-interpreter.service';
import { EmailToGetSecurityQuestionInputService }
	from '../email-to-get-security-question-input.service';
import { GetSecurityQuestionService } from './get-security-question.service';
import { SecurityQuestionServicesModule }
	from '@app/routed-modules/security-question/security-question-services.module';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class GetSecurityQuestionProcessorService extends FormDataTransportProcessorService {

	constructor(
		__validatingInput: EmailToGetSecurityQuestionInputService,
		__getResult: GetSecurityQuestionService,
		__resultInterpreter: GetSecurityQuestionResultInterpreterService
	) {
		super(__validatingInput, __getResult, __resultInterpreter);
	}

}
