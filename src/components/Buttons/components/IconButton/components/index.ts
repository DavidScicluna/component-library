import type {
	IconButtonIconDefaultElement,
	IconButtonIconElement,
	IconButtonIconProps,
	IconButtonIconRef
} from './IconButtonIcon';
import { IconButtonIcon, keys as icon_button_icon_keys } from './IconButtonIcon';
import type { IconButtonSpinnerProps, IconButtonSpinnerRef } from './IconButtonSpinner';
import {
	constants as icon_button_spinner_constants,
	hooks as icon_button_spinner_hooks,
	IconButtonSpinner,
	keys as icon_button_spinner_keys
} from './IconButtonSpinner';

// Constants
export const constants = { ...icon_button_spinner_constants };

// Keys
export const keys = { ...icon_button_icon_keys, ...icon_button_spinner_keys };

// Hooks
export const hooks = { ...icon_button_spinner_hooks };

// Components
export { IconButtonIcon, IconButtonSpinner };

// Component Types
export type {
	IconButtonIconDefaultElement,
	IconButtonIconElement,
	IconButtonIconProps,
	IconButtonIconRef,
	IconButtonSpinnerProps,
	IconButtonSpinnerRef
};
