import type { ButtonIconDefaultElement, ButtonIconElement, ButtonIconProps, ButtonIconRef } from './ButtonIcon';
import { ButtonIcon, keys as buttonIconKeys } from './ButtonIcon';
import type { ButtonSpinnerProps, ButtonSpinnerRef } from './ButtonSpinner';
import { ButtonSpinner, keys as buttonSpinnerKeys } from './ButtonSpinner';

// Keys
export const keys = { ...buttonIconKeys, ...buttonSpinnerKeys };

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
