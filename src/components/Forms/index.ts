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
import { constants as number_input_constants, keys as number_input_keys, NumberInput } from './components/NumberInput';
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
	...number_input_constants,
	...textarea_constants,
	...text_input_constants,
	...checkbox_constants,
	...email_input_constants,
	...file_input_constants,
	...password_input_constants,
	...radio_constants,
	...rating_constants,
	...search_input_constants,
	...switch_constants
};

// Keys
export const keys = {
	...form_keys,
	...form_control_keys,
	...form_description_keys,
	...form_header_keys,
	...form_helper_text_keys,
	...form_label_keys,
	...number_input_keys,
	...textarea_keys,
	...text_input_keys,
	...checkbox_keys,
	...email_input_keys,
	...file_input_keys,
	...password_input_keys,
	...radio_keys,
	...rating_keys,
	...search_input_keys,
	...switch_keys
};

// Hooks
export const hooks = {
	...common_hooks,
	...form_control_hooks,
	...checkbox_hooks,
	...radio_hooks,
	...rating_hooks,
	...switch_hooks
};

import type {
	CheckboxChangeEvent,
	CheckboxFocusEvent,
	CheckboxLabelPosition,
	CheckboxMouseEvent,
	CheckboxProps,
	CheckboxRef,
	CheckboxSize
} from './components/Checkbox';
import {
	Checkbox,
	constants as checkbox_constants,
	hooks as checkbox_hooks,
	keys as checkbox_keys
} from './components/Checkbox';
import type {
	EmailInputChangeEvent,
	EmailInputDefaultElement,
	EmailInputElement,
	EmailInputFocusEvent,
	EmailInputMouseEvent,
	EmailInputProps,
	EmailInputRef,
	EmailInputRenderProps,
	// EmailInputAutoComplete,
	EmailInputSize,
	EmailInputVariant
} from './components/EmailInput';
import { constants as email_input_constants, EmailInput, keys as email_input_keys } from './components/EmailInput';
import type {
	FileInputChangeEvent,
	FileInputDefaultElement,
	FileInputElement,
	FileInputFocusEvent,
	FileInputMouseEvent,
	FileInputProps,
	FileInputRef,
	FileInputRenderProps,
	// FileInputAutoComplete,
	FileInputSize,
	FileInputVariant
} from './components/FileInput';
import { constants as file_input_constants, FileInput, keys as file_input_keys } from './components/FileInput';
import type {
	NumberInputChangeEvent,
	NumberInputDefaultElement,
	NumberInputElement,
	NumberInputFocusEvent,
	NumberInputMouseEvent,
	NumberInputProps,
	NumberInputRef,
	NumberInputRenderControlsProps,
	NumberInputRenderProps,
	// NumberInputAutoComplete,
	NumberInputSize,
	NumberInputVariant
} from './components/NumberInput';
import type {
	PasswordInputChangeEvent,
	PasswordInputDefaultElement,
	PasswordInputElement,
	PasswordInputFocusEvent,
	PasswordInputMouseEvent,
	PasswordInputProps,
	PasswordInputRef,
	PasswordInputRenderProps,
	// PasswordInputAutoComplete,
	PasswordInputSize,
	PasswordInputVariant
} from './components/PasswordInput';
import {
	constants as password_input_constants,
	keys as password_input_keys,
	PasswordInput
} from './components/PasswordInput';
import type {
	RadioChangeEvent,
	RadioFocusEvent,
	RadioLabelPosition,
	RadioMouseEvent,
	RadioProps,
	RadioRef,
	RadioSize
} from './components/Radio';
import { constants as radio_constants, hooks as radio_hooks, keys as radio_keys, Radio } from './components/Radio';
import type { RatingDirection, RatingIcons, RatingProps, RatingRef, RatingSize } from './components/Rating';
import { constants as rating_constants, hooks as rating_hooks, keys as rating_keys, Rating } from './components/Rating';
import type {
	SearchInputChangeEvent,
	SearchInputDefaultElement,
	SearchInputElement,
	SearchInputFocusEvent,
	SearchInputMouseEvent,
	SearchInputProps,
	SearchInputRef,
	SearchInputRenderProps,
	// SearchInputAutoComplete,
	SearchInputSize,
	SearchInputVariant
} from './components/SearchInput';
import { constants as search_input_constants, keys as search_input_keys, SearchInput } from './components/SearchInput';
import type {
	SwitchChangeEvent,
	SwitchFocusEvent,
	SwitchLabelPosition,
	SwitchMouseEvent,
	SwitchProps,
	SwitchRef,
	SwitchSize
} from './components/Switch';
import { constants as switch_constants, hooks as switch_hooks, keys as switch_keys, Switch } from './components/Switch';

// Components
export {
	Checkbox,
	EmailInput,
	FileInput,
	Form,
	FormControl,
	FormDescription,
	FormHeader,
	FormHelperText,
	FormLabel,
	NumberInput,
	PasswordInput,
	Radio,
	Rating,
	SearchInput,
	Switch,
	Textarea,
	TextInput
};

// Component Types
export type {
	CheckboxChangeEvent,
	CheckboxFocusEvent,
	CheckboxLabelPosition,
	CheckboxMouseEvent,
	CheckboxProps,
	CheckboxRef,
	CheckboxSize,
	EmailInputChangeEvent,
	EmailInputDefaultElement,
	EmailInputElement,
	EmailInputFocusEvent,
	EmailInputMouseEvent,
	EmailInputProps,
	EmailInputRef,
	EmailInputRenderProps,
	// EmailInputAutoComplete,
	EmailInputSize,
	EmailInputVariant,
	FileInputChangeEvent,
	FileInputDefaultElement,
	FileInputElement,
	FileInputFocusEvent,
	FileInputMouseEvent,
	FileInputProps,
	FileInputRef,
	FileInputRenderProps,
	// FileInputAutoComplete,
	FileInputSize,
	FileInputVariant,
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
	NumberInputChangeEvent,
	NumberInputDefaultElement,
	NumberInputElement,
	NumberInputFocusEvent,
	NumberInputMouseEvent,
	NumberInputProps,
	NumberInputRef,
	NumberInputRenderControlsProps,
	NumberInputRenderProps,
	// NumberInputAutoComplete,
	NumberInputSize,
	NumberInputVariant,
	PasswordInputChangeEvent,
	PasswordInputDefaultElement,
	PasswordInputElement,
	PasswordInputFocusEvent,
	PasswordInputMouseEvent,
	PasswordInputProps,
	PasswordInputRef,
	PasswordInputRenderProps,
	// PasswordInputAutoComplete,
	PasswordInputSize,
	PasswordInputVariant,
	RadioChangeEvent,
	RadioFocusEvent,
	RadioLabelPosition,
	RadioMouseEvent,
	RadioProps,
	RadioRef,
	RadioSize,
	RatingDirection,
	RatingIcons,
	RatingProps,
	RatingRef,
	RatingSize,
	SearchInputChangeEvent,
	SearchInputDefaultElement,
	SearchInputElement,
	SearchInputFocusEvent,
	SearchInputMouseEvent,
	SearchInputProps,
	SearchInputRef,
	SearchInputRenderProps,
	// SearchInputAutoComplete,
	SearchInputSize,
	SearchInputVariant,
	SwitchChangeEvent,
	SwitchFocusEvent,
	SwitchLabelPosition,
	SwitchMouseEvent,
	SwitchProps,
	SwitchRef,
	SwitchSize,
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
