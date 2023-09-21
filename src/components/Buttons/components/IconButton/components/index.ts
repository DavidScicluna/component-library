import type {
	IconButtonIconDefaultElement,
	IconButtonIconElement,
	IconButtonIconProps,
	IconButtonIconRef
} from './IconButtonIcon';
import { IconButtonIcon, keys as iconButtonIconKeys } from './IconButtonIcon';
import type { IconButtonSpinnerProps, IconButtonSpinnerRef } from './IconButtonSpinner';
import { IconButtonSpinner, keys as iconButtonSpinnereys } from './IconButtonSpinner';

// Keys
export const keys = { ...iconButtonIconKeys, ...iconButtonSpinnereys };

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
