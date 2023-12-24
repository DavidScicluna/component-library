import type { ButtonIconDefaultElement, ButtonIconElement, ButtonIconProps, ButtonIconRef } from './ButtonIcon';
import { ButtonIcon, keys as button_icon_keys } from './ButtonIcon';
import type { ButtonSpinnerProps, ButtonSpinnerRef } from './ButtonSpinner';
import {
	ButtonSpinner,
	constants as button_spinner_constants,
	hooks as button_spinner_hooks,
	keys as button_spinner_keys
} from './ButtonSpinner';

// Constants
export const constants = { ...button_spinner_constants };

// Keys
export const keys = { ...button_icon_keys, ...button_spinner_keys };

// Hooks
export const hooks = { ...button_spinner_hooks };

// Components
export { ButtonIcon, ButtonSpinner };

// Component Types
export type {
	ButtonIconDefaultElement,
	ButtonIconElement,
	ButtonIconProps,
	ButtonIconRef,
	ButtonSpinnerProps,
	ButtonSpinnerRef
};
