import * as commonConstants from './common/constants';
import { useBadgeClasses, useBadgeContext, useBadgeFontSize, useBadgeSizeConfig } from './common/hooks';
import * as commonKeys from './common/keys';
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
	constants as componentsConstants,
	keys as componentsKeys
} from './components';

// Constants
export const constants = { ...commonConstants, ...componentsConstants };

// Keys
export const keys = { ...commonKeys, ...componentsKeys };

// Hooks
export { useBadgeClasses, useBadgeContext, useBadgeFontSize, useBadgeSizeConfig };

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
