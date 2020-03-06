import { URLParamIDService as paramID } from './url-param-id.service';


// Contains all routes the LibraryModule is concerned with.
// The keys are the modules or components that will be loaded when
// their route is accessed.


export const LibraryModuleRouteService = {

	ImageViewerModule: paramID.library + '/image',
	LibraryComponent: paramID.library + '/page/' + paramID.pageNumber

};
