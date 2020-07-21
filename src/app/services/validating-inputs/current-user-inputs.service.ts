import { AppValidatingInputsService } from './app-validating-inputs.service';
import { Bind_ValidatingInputsService_to_Object }
	from './bind-validating-inputs-service-to-object/bind-validating-inputs-service-to-object.decorator';
import { CurrentUserData }
	from '../../../data-structures/runtime-state-data/static-classes/current-user.data';


@Bind_ValidatingInputsService_to_Object(CurrentUserData)

export abstract class CurrentUserInputsService extends AppValidatingInputsService {
}
