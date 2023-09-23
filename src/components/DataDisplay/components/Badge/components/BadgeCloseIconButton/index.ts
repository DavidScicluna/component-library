import * as constantsKeys from './common/constants';
import { useBadgeCloseIconButtonClasses } from './common/hooks';
import * as commonKeys from './common/keys';
import type {
	BadgeCloseIconButtonDefaultElement,
	BadgeCloseIconButtonElement,
	BadgeCloseIconButtonProps,
	BadgeCloseIconButtonRef
} from './common/types';
import BadgeCloseIconButton from './BadgeCloseIconButton';

// Constants
export const constants = { ...constantsKeys };

// Keys
export const keys = { ...commonKeys };

// Hooks
export { useBadgeCloseIconButtonClasses };

// Components
export { BadgeCloseIconButton };

// Component Types
export type {
	BadgeCloseIconButtonDefaultElement,
	BadgeCloseIconButtonElement,
	BadgeCloseIconButtonProps,
	BadgeCloseIconButtonRef
};
