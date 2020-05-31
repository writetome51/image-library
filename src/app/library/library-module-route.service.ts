import { URLParamIDData as paramID } from '../../data-structures/read-only-data/url-param-id.data';


// Contains all routes the LibraryModule is concerned with.
// The keys are the modules or components that will be loaded when
// their route is accessed.


export const LibraryModuleRouteService = {

	ImageViewerModule: `:${paramID.libName}/image`,
	LibraryComponent: `:${paramID.libName}/page/:${paramID.pageNumber}`

};
