import {
	__DEFAULT_GLASS_OVERLAY_BLUR__,
	__DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND__,
	__DEFAULT_GLASS_OVERLAY_IS_BACKDROP__
} from './common/constants';
import { useGlassOverlayClasses } from './common/hooks';
import type { GlassOverlayBlur, GlassOverlayProps, GlassOverlayRef } from './common/types';
import GlassOverlay from './GlassOverlay';

// Constants
export const constants = {
	__DEFAULT_GLASS_OVERLAY_BLUR__,
	__DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND__,
	__DEFAULT_GLASS_OVERLAY_IS_BACKDROP__
};

// Hooks
export { useGlassOverlayClasses };

// Components
export { GlassOverlay };

// Component Types
export type { GlassOverlayBlur, GlassOverlayProps, GlassOverlayRef };
