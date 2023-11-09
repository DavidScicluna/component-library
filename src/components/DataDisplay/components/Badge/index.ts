import * as common_constants from './common/constants';
import * as common_keys from './common/keys';
import type { BadgeContext, BadgeProps, BadgeRef, BadgeRenderProps, BadgeSize, BadgeVariant } from './common/types';
import Badge from './Badge';
import type {
	BadgeCloseIconButtonDefaultElement,
	BadgeCloseIconButtonElement,
	BadgeCloseIconButtonProps,
	BadgeCloseIconButtonRef,
	BadgeIconDefaultElement,
	BadgeIconElement,
	BadgeIconProps,
	BadgeIconRef
} from './components';
import {
	BadgeCloseIconButton,
	BadgeIcon,
	constants as components_constants,
	keys as components_keys
} from './components';

// Constants
export const constants = { ...common_constants, ...components_constants };

// Keys
export const keys = { ...common_keys, ...components_keys };

// Hooks
export * as hooks from './common/hooks';

// Components
export { Badge, BadgeCloseIconButton, BadgeIcon };

// Component Types
export type {
	BadgeCloseIconButtonDefaultElement,
	BadgeCloseIconButtonElement,
	BadgeCloseIconButtonProps,
	BadgeCloseIconButtonRef,
	BadgeContext,
	BadgeIconDefaultElement,
	BadgeIconElement,
	BadgeIconProps,
	BadgeIconRef,
	BadgeProps,
	BadgeRef,
	BadgeRenderProps,
	BadgeSize,
	BadgeVariant
};
