import * as common_constants from './common/constants';
import * as common_hooks from './common/hooks';
import type { FormsCommonProps, FormsCommonSize, FormsCommonVariant } from './common/types';
import type { FormProps, FormRef } from './components/Form';
import { Form, keys as form_keys } from './components/Form';
import type { FormControlContext, FormControlProps, FormControlRef, FormControlSize } from './components/FormControl';
import {
	constants as form_control_constants,
	FormControl,
	hooks as form_control_hooks,
	keys as form_control_keys
} from './components/FormControl';
import type {
	FormDescriptionDefaultElement,
	FormDescriptionElement,
	FormDescriptionProps,
	FormDescriptionRef
} from './components/FormDescription';
import { FormDescription, keys as form_description_keys } from './components/FormDescription';
import type { FormHeaderProps, FormHeaderRef, FormHeaderRenderProps } from './components/FormHeader';
import { FormHeader, keys as form_header_keys } from './components/FormHeader';
import type {
	FormHelperTextDefaultElement,
	FormHelperTextElement,
	FormHelperTextProps,
	FormHelperTextRef
} from './components/FormHelperText';
import { FormHelperText, keys as form_helper_text_keys } from './components/FormHelperText';
import type { FormLabelDefaultElement, FormLabelElement, FormLabelProps, FormLabelRef } from './components/FormLabel';
import { FormLabel, keys as form_label_keys } from './components/FormLabel';
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
import { constants as textarea_constants, keys as textarea_keys, Textarea } from './components/Textarea';
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
import { constants as text_input_constants, keys as text_input_keys, TextInput } from './components/TextInput';

// Constants
export const constants = {
	...common_constants,
	...form_control_constants,
	...textarea_constants,
	...text_input_constants
};

// Keys
export const keys = {
	...form_keys,
	...form_control_keys,
	...form_description_keys,
	...form_header_keys,
	...form_helper_text_keys,
	...form_label_keys,
	...textarea_keys,
	...text_input_keys
};

// Hooks
export const hooks = { ...common_hooks, ...form_control_hooks };

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
