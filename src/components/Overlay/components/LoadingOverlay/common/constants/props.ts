import type { ThemeBlurClass, ThemeRadius } from '@common/types';

import type { LoadingOverlayBlurType } from '../types';

export const DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT = 0.5;

export const DEFAULT_LOADING_OVERLAY_BLUR: ThemeBlurClass = 'md';
export const DEFAULT_LOADING_OVERLAY_BLUR_TYPE: LoadingOverlayBlurType = 'backdrop';

export const DEFAULT_LOADING_OVERLAY_RADIUS: ThemeRadius = 'none';

export const DEFAULT_LOADING_OVERLAY_IS_LOADING = false;
export const DEFAULT_LOADING_OVERLAY_HAS_GLASS = true;
export const DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND = true;
