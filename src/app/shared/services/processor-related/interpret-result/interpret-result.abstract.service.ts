import { IDoThis } from '@interfaces/i-do-this.interface';
import { InterpretResult } from './interpret-result.interface';
import { HandleErrorService } from '../handle-error.service';
import { HasError } from '@interfaces/has-error.interface';


export abstract class InterpretResultService implements InterpretResult {

	constructor(
		private __handleError: HandleErrorService,
		private __runPostSuccessTasks: IDoThis
	) {
	}


	async go(result: any | HasError): Promise<void> {

		if (result.error) await this.__handleError.go(result.error);

		else await this.__runPostSuccessTasks.go(result);
	}

}
