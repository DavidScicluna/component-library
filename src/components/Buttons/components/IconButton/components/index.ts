import type {
	IconButtonIconDefaultElement,
	IconButtonIconElement,
	IconButtonIconProps,
	IconButtonIconRef
} from './IconButtonIcon';
import { IconButtonIcon, keys as icon_button_icon_keys } from './IconButtonIcon';
import type { IconButtonSpinnerProps, IconButtonSpinnerRef } from './IconButtonSpinner';
import { IconButtonSpinner, keys as icon_button_spinner_keys } from './IconButtonSpinner';

// Keys
export const keys = { ...icon_button_icon_keys, ...icon_button_spinner_keys };

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
