import { __PrefixLabel_to_ValidatingInputServiceDecorator }
	from './__prefix-label-to-validating-input-service.decorator';


/*****************
Decorator for some ValidatingInputService subclasses.
 Usage:

@PrefixLabel_to_ValidatingInputService({ prefix: string, prefix_propertyToBind?: boolean })
export class TheClass {...}
 *****************/
// @ts-ignore
export const PrefixLabel_to_ValidatingInputService: (
	params: { prefix: string, prefix_propertyToBind?: boolean }
) => Function = __PrefixLabel_to_ValidatingInputServiceDecorator;