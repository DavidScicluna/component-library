import type {
	BadgeCloseIconButtonDefaultElement,
	BadgeCloseIconButtonElement,
	BadgeCloseIconButtonProps,
	BadgeCloseIconButtonRef
} from './BadgeCloseIconButton';
import {
	BadgeCloseIconButton,
	constants as badge_close_icon_button_constants,
	keys as badge_close_icon_button_keys
} from './BadgeCloseIconButton';
import type { BadgeIconDefaultElement, BadgeIconElement, BadgeIconProps, BadgeIconRef } from './BadgeIcon';
import { BadgeIcon, keys as badge_icon_keys } from './BadgeIcon';

// Constants
export const constants = { ...badge_close_icon_button_constants };

// Keys
export const keys = { ...badge_close_icon_button_keys, ...badge_icon_keys };

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
