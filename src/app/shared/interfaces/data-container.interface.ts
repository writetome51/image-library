import { Settable } from './settable.interface';
import { Gettable } from './gettable.interface';

// An object that implements DataContainer abstracts the storing of its data.
// Where it stores the data, how it stores it, in what form it stores it, etc.,
// is up to that object.

export interface DataContainer<TypeToSet, TypeToGet>
	extends Settable<TypeToSet>, Gettable<TypeToGet> {}
