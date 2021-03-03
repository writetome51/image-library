import { ProcessSaveFormDataToDbService }
	from '@process/process-save-form-data-to-db.abstract.service';
import { Injectable } from '@angular/core';
import { InterpretGetSecurityQuestionResultService }
	from './interpret-get-security-question-result_service/interpret-get-security-question-result.service';
import { EmailToGetSecurityQuestionInputService }
	from '../email-to-get-security-question-input.service';
import { GetSecurityQuestionService } from './get-security-question.service';
import { SecurityQuestionServicesModule } from '../../security-question-services.module';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class ProcessGetSecurityQuestionService extends ProcessSaveFormDataToDbService {

	constructor(
		__validatingInput: EmailToGetSecurityQuestionInputService,
		__getResult: GetSecurityQuestionService,
		__interpretResult: InterpretGetSecurityQuestionResultService
	) {
		super(__validatingInput, __getResult, __interpretResult);
	}

}