import { Injectable } from '@angular/core';
import { UpdateEmailOrPasswordResultInterpreterService }
	from './update-email-or-password-result-interpreter.service';
import { SetMessageFor_UpdateEmailOrPasswordResultProcessor }
	from './set-message-for-update-email-or-password-result-processor.decorator';


@Injectable({providedIn: 'root'})
@SetMessageFor_UpdateEmailOrPasswordResultProcessor('Password updated.')

export class UpdatePasswordResultInterpreterService extends UpdateEmailOrPasswordResultInterpreterService {
}
