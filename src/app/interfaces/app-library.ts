import { AppImage } from './app-image';


export interface AppLibrary {
	name: string;
	images: AppImage[]; // 'tags' property of each image is indexed.
}