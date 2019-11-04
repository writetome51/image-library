// Represents a <form> input that validates itself.

export interface ValidatingInput {

	type: string; // 'text', 'password', etc.  Any <input> type

	id: string; // becomes value of <input> id

	isValid: () => boolean; // To be called during an input event, like 'onblur'

	errorMessage: string; // message to show if input is invalid

	error: string; // Empty string.  If input is invalid, this is assigned the errorMessage

	objectToBind: any; // <input> intended to bind with objectToBind[propertyToBind]

	propertyToBind: string; // property in objectToBind

	hideLabel: boolean; // if true, the inputs <label> is hidden

	required: boolean;

	placeholder?: string; // only used on text or password inputs

	prompt?: string; // line of text explaining input or asking user to fill it in

}
