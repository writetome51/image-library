// @ts-ignore
const FileSaver = require('file-saver');
import { getDateTimeID } from '@writetome51/get-date-time-id';
import { ImageStoreService } from './image-store.service';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class LibrarySaverService {

    private __fileNamePrefix = 'image-library-';
    private __extension = '.json';
    private __writeOptions = {type: 'text/plain;charset=utf-8'};


    constructor(private __imageStore: ImageStoreService) {
    }


    save(): void {
        let txtToWrite = JSON.stringify(this.__imageStore.images);
        let fileName = (this.__fileNamePrefix + getDateTimeID() + this.__extension);

        let file = new File([txtToWrite], fileName, this.__writeOptions);
        FileSaver.saveAs(file);
    }


}