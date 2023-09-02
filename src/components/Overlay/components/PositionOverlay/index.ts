import {
	__DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT__,
	__DEFAULT_POSITION_OVERLAY_BLUR__,
	__DEFAULT_POSITION_OVERLAY_BLUR_TYPE__,
	__DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND__,
	__DEFAULT_POSITION_OVERLAY_HAS_GLASS__,
	__DEFAULT_POSITION_OVERLAY_IS_OVERLAY_VISIBLE__,
	__DEFAULT_POSITION_OVERLAY_PLACEMENT__,
	__DEFAULT_POSITION_OVERLAY_RADIUS__
} from './common/constants';
import { usePositionOverlayClasses, usePositionOverlayStyles } from './common/hooks';
import type {
	PositionOverlayBlurType,
	PositionOverlayBlurTypes,
	PositionOverlayPlacement,
	PositionOverlayPlacements,
	PositionOverlayProps,
	PositionOverlayRef
} from './common/types';
import PositionOverlay from './PositionOverlay';

// Constants
export const constants = {
	__DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT__,
	__DEFAULT_POSITION_OVERLAY_BLUR__,
	__DEFAULT_POSITION_OVERLAY_BLUR_TYPE__,
	__DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND__,
	__DEFAULT_POSITION_OVERLAY_HAS_GLASS__,
	__DEFAULT_POSITION_OVERLAY_IS_OVERLAY_VISIBLE__,
	__DEFAULT_POSITION_OVERLAY_PLACEMENT__,
	__DEFAULT_POSITION_OVERLAY_RADIUS__
};

// Hooks
export { usePositionOverlayClasses, usePositionOverlayStyles };

// Components
export { PositionOverlay };

// Component Types
export type {
	PositionOverlayBlurType,
	PositionOverlayBlurTypes,
	PositionOverlayPlacement,
	PositionOverlayPlacements,
	PositionOverlayProps,
	PositionOverlayRef
};
