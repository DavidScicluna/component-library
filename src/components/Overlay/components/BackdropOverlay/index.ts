import {
	__DEFAULT_BACKDROP_OVERLAY_AMOUNT__,
	__DEFAULT_BACKDROP_OVERLAY_BLUR__,
	__DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE__,
	__DEFAULT_BACKDROP_OVERLAY_RADIUS__
} from './common/constants';
import { useBackdropOverlayClasses, useBackdropOverlayStyles } from './common/hooks';
import type {
	BackdropOverlayBlurType,
	BackdropOverlayBlurTypes,
	BackdropOverlayProps,
	BackdropOverlayRef
} from './common/types';
import BackdropOverlay from './BackdropOverlay';

// Constants
export const constants = {
	__DEFAULT_BACKDROP_OVERLAY_AMOUNT__,
	__DEFAULT_BACKDROP_OVERLAY_RADIUS__,
	__DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE__,
	__DEFAULT_BACKDROP_OVERLAY_BLUR__
};

// Hooks
export { useBackdropOverlayClasses, useBackdropOverlayStyles };

// Components
export { BackdropOverlay };

// Component Types
export type { BackdropOverlayBlurType, BackdropOverlayBlurTypes, BackdropOverlayProps, BackdropOverlayRef };
