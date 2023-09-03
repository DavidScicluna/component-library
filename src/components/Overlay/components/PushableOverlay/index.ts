import {
	__DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_FIXED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_FOCUSED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE__,
	__DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__,
	__DEFAULT_PUSHABLE_OVERLAY_VARIANT__
} from './common/constants';
import { usePushableOverlayClasses, usePushableOverlayStyles } from './common/hooks';
import type { PushableOverlayProps, PushableOverlayRef, PushableOverlayVariant } from './common/types';
import PushableOverlay from './PushableOverlay';

// Constants
export const constants = {
	__DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_FIXED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE__,
	__DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__,
	__DEFAULT_PUSHABLE_OVERLAY_VARIANT__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_FOCUSED__
};

// Hooks
export { usePushableOverlayClasses, usePushableOverlayStyles };

// Components
export { PushableOverlay };

// Component Types
export type { PushableOverlayProps, PushableOverlayRef, PushableOverlayVariant };
