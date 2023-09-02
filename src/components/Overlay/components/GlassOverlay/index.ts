import {
	__DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT__,
	__DEFAULT_GLASS_OVERLAY_BLUR__,
	__DEFAULT_GLASS_OVERLAY_BLUR_TYPE__,
	__DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND__
} from './common/constants';
import { useGlassOverlayClasses, useGlassOverlayStyles } from './common/hooks';
import type { GlassOverlayBlurType, GlassOverlayBlurTypes, GlassOverlayProps, GlassOverlayRef } from './common/types';
import GlassOverlay from './GlassOverlay';

// Constants
export const constants = {
	__DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT__,
	__DEFAULT_GLASS_OVERLAY_BLUR__,
	__DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND__,
	__DEFAULT_GLASS_OVERLAY_BLUR_TYPE__
};

// Hooks
export { useGlassOverlayClasses, useGlassOverlayStyles };

// Components
export { GlassOverlay };

// Component Types
export type { GlassOverlayBlurType, GlassOverlayBlurTypes, GlassOverlayProps, GlassOverlayRef };
