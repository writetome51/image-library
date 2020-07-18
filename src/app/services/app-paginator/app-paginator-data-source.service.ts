import { DBImage } from '../../../interfaces/db-image';
import { DataTotalService } from './data-total.service';
import { DataTransportProcessorService }
	from '../data-transport-processor/data-transport-processor.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { LoadData as load }
	from '../../../data-structures/runtime-state-data/static-classes/load.data';
import { LoadedImagesData as loadedImages }
	from '../../../data-structures/runtime-state-data/static-classes/loaded-images.data';
import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from '../perform-data-process-requiring-waiting.service';
import { OperationStatusData as operationStatus }
	from '../../../data-structures/runtime-state-data/operation-status.data';


export abstract class AppPaginatorDataSourceService {

	get dataTotal(): number {
		return this.__dataTotal.get();
	}


	constructor(
		private __set_loadedImages_processor: DataTransportProcessorService,
		private __dataTotal: DataTotalService
	) {
	}


	async set_dataTotal() {
		await this.__dataTotal.set();
	}


	async getLoad(
		loadNum: number, itemsPerLoad: number, isLastLoad: boolean
	): Promise<DBImage[]> {

		load.number = loadNum;
		await performDataProcessRequiringWaiting.go(this.__set_loadedImages_processor, operationStatus);

		if (hasValue(loadedImages.data)) return loadedImages.data;
		else return [];
	}

}
