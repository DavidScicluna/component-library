import {
	__DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT__,
	__DEFAULT_LOADING_OVERLAY_BLUR__,
	__DEFAULT_LOADING_OVERLAY_BLUR_TYPE__,
	__DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND__,
	__DEFAULT_LOADING_OVERLAY_HAS_GLASS__,
	__DEFAULT_LOADING_OVERLAY_IS_LOADING__,
	__DEFAULT_LOADING_OVERLAY_RADIUS__
} from './common/constants';
import { useLoadingOverlayClasses, useLoadingOverlayStyles } from './common/hooks';
import type {
	LoadingOverlayBlurType,
	LoadingOverlayBlurTypes,
	LoadingOverlayProps,
	LoadingOverlayRef
} from './common/types';
import LoadingOverlay from './LoadingOverlay';

// Constants
export const constants = {
	__DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT__,
	__DEFAULT_LOADING_OVERLAY_BLUR__,
	__DEFAULT_LOADING_OVERLAY_BLUR_TYPE__,
	__DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND__,
	__DEFAULT_LOADING_OVERLAY_HAS_GLASS__,
	__DEFAULT_LOADING_OVERLAY_IS_LOADING__,
	__DEFAULT_LOADING_OVERLAY_RADIUS__
};

// Hooks
export { useLoadingOverlayClasses, useLoadingOverlayStyles };

// Components
export { LoadingOverlay };

// Component Types
export type { LoadingOverlayBlurType, LoadingOverlayBlurTypes, LoadingOverlayProps, LoadingOverlayRef };
