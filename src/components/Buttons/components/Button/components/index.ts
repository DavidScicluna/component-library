import type { ButtonIconDefaultElement, ButtonIconElement, ButtonIconProps, ButtonIconRef } from './ButtonIcon';
import { ButtonIcon, keys as button_icon_keys } from './ButtonIcon';
import type { ButtonSpinnerProps, ButtonSpinnerRef } from './ButtonSpinner';
import { ButtonSpinner, keys as button_spinner_keys } from './ButtonSpinner';

// Keys
export const keys = { ...button_icon_keys, ...button_spinner_keys };

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
