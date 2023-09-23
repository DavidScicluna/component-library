import type {
	BadgeCloseIconButtonDefaultElement,
	BadgeCloseIconButtonElement,
	BadgeCloseIconButtonProps,
	BadgeCloseIconButtonRef
} from './BadgeCloseIconButton';
import {
	BadgeCloseIconButton,
	constants as badgeCloseIconButtonConstants,
	keys as badgeCloseIconButtonKeys,
	useBadgeCloseIconButtonClasses
} from './BadgeCloseIconButton';
import type { BadgeIconDefaultElement, BadgeIconElement, BadgeIconProps, BadgeIconRef } from './BadgeIcon';
import { BadgeIcon, keys as badgeIconKeys } from './BadgeIcon';

// Constants
export const constants = { ...badgeCloseIconButtonConstants };

// Keys
export const keys = { ...badgeCloseIconButtonKeys, ...badgeIconKeys };

// Hooks
export { useBadgeCloseIconButtonClasses };

// Components
export { BadgeCloseIconButton, BadgeIcon };

// Component Types
export type {
	BadgeCloseIconButtonDefaultElement,
	BadgeCloseIconButtonElement,
	BadgeCloseIconButtonProps,
	BadgeCloseIconButtonRef,
	BadgeIconDefaultElement,
	BadgeIconElement,
	BadgeIconProps,
	BadgeIconRef
};
