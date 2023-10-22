import * as commonConstants from './common/constants';
import * as commonHooks from './common/hooks';
import type { FormsCommonProps, FormsCommonSize, FormsCommonVariant } from './common/types';
import type { FormProps, FormRef } from './components/Form';
import { Form, keys as formKeys } from './components/Form';
import type { FormControlContext, FormControlProps, FormControlRef, FormControlSize } from './components/FormControl';
import {
	constants as formControlConstants,
	FormControl,
	hooks as formControlHooks,
	keys as formControlKeys
} from './components/FormControl';
import type {
	FormDescriptionDefaultElement,
	FormDescriptionElement,
	FormDescriptionProps,
	FormDescriptionRef
} from './components/FormDescription';
import { FormDescription, keys as formDescriptionKeys } from './components/FormDescription';
import type { FormHeaderProps, FormHeaderRef, FormHeaderRenderProps } from './components/FormHeader';
import { FormHeader, keys as formHeaderKeys } from './components/FormHeader';
import type {
	FormHelperTextDefaultElement,
	FormHelperTextElement,
	FormHelperTextProps,
	FormHelperTextRef
} from './components/FormHelperText';
import { FormHelperText, keys as formHelperTextKeys } from './components/FormHelperText';
import type { FormLabelDefaultElement, FormLabelElement, FormLabelProps, FormLabelRef } from './components/FormLabel';
import { FormLabel, keys as formLabelKeys } from './components/FormLabel';
import type {
	TextareaChangeEvent,
	TextareaDefaultElement,
	TextareaElement,
	TextareaFocusEvent,
	TextareaMouseEvent,
	TextareaProps,
	TextareaRef,
	TextareaRenderProps,
	// TextareaAutoComplete,
	TextareaSize,
	TextareaVariant
} from './components/Textarea';
import { constants as textareaConstants, keys as textareaKeys, Textarea } from './components/Textarea';
import type {
	TextInputChangeEvent,
	TextInputDefaultElement,
	TextInputElement,
	TextInputFocusEvent,
	TextInputMouseEvent,
	TextInputProps,
	TextInputRef,
	TextInputRenderProps,
	// TextInputAutoComplete,
	TextInputSize,
	TextInputVariant
} from './components/TextInput';
import { constants as textInputConstants, keys as textInputKeys, TextInput } from './components/TextInput';

// Constants
export const constants = { ...commonConstants, ...formControlConstants, ...textareaConstants, ...textInputConstants };

// Keys
export const keys = {
	...formKeys,
	...formControlKeys,
	...formDescriptionKeys,
	...formHeaderKeys,
	...formHelperTextKeys,
	...formLabelKeys,
	...textareaKeys,
	...textInputKeys
};

// Hooks
export const hooks = { ...commonHooks, ...formControlHooks };

// Components
export { Form, FormControl, FormDescription, FormHeader, FormHelperText, FormLabel, Textarea, TextInput };

// Component Types
export type {
	FormControlContext,
	FormControlProps,
	FormControlRef,
	FormControlSize,
	FormDescriptionDefaultElement,
	FormDescriptionElement,
	FormDescriptionProps,
	FormDescriptionRef,
	FormHeaderProps,
	FormHeaderRef,
	FormHeaderRenderProps,
	FormHelperTextDefaultElement,
	FormHelperTextElement,
	FormHelperTextProps,
	FormHelperTextRef,
	FormLabelDefaultElement,
	FormLabelElement,
	FormLabelProps,
	FormLabelRef,
	FormProps,
	FormRef,
	FormsCommonProps,
	FormsCommonSize,
	FormsCommonVariant,
	TextareaChangeEvent,
	TextareaDefaultElement,
	TextareaElement,
	TextareaFocusEvent,
	TextareaMouseEvent,
	TextareaProps,
	TextareaRef,
	TextareaRenderProps,
	// TextareaAutoComplete,
	TextareaSize,
	TextareaVariant,
	TextInputChangeEvent,
	TextInputDefaultElement,
	TextInputElement,
	TextInputFocusEvent,
	TextInputMouseEvent,
	TextInputProps,
	TextInputRef,
	TextInputRenderProps,
	// TextInputAutoComplete,
	TextInputSize,
	TextInputVariant
};
