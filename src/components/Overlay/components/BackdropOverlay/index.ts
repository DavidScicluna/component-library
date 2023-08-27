import { __DEFAULT_BACKDROP_OVERLAY_AMOUNT__, __DEFAULT_BACKDROP_OVERLAY_BLUR__ } from './common/constants';
import { useBackdropOverlayClasses, useBackdropOverlayStyles } from './common/hooks';
import type {
	BackdropOverlayBlur,
	BackdropOverlayDefaultElement,
	BackdropOverlayElement,
	BackdropOverlayProps,
	BackdropOverlayRef
} from './common/types';
import BackdropOverlay from './BackdropOverlay';

// Constants
export const constants = { __DEFAULT_BACKDROP_OVERLAY_AMOUNT__, __DEFAULT_BACKDROP_OVERLAY_BLUR__ };

// Hooks
export { useBackdropOverlayClasses, useBackdropOverlayStyles };

// Components
export { BackdropOverlay };

// Component Types
export type {
	BackdropOverlayBlur,
	BackdropOverlayDefaultElement,
	BackdropOverlayElement,
	BackdropOverlayProps,
	BackdropOverlayRef
};
