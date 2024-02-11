import type { ThemeBlurClass, ThemeRadius } from '@common/types';

import type { PositionOverlayBlurType, PositionOverlayItemPlacement, PositionOverlayItems } from '../types';

export const __DEFAULT_POSITION_OVERLAY_ITEMS__: PositionOverlayItems = [];

export const __DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT__ = 0.5;

export const __DEFAULT_POSITION_OVERLAY_BLUR__: ThemeBlurClass = 'md';
export const __DEFAULT_POSITION_OVERLAY_BLUR_TYPE__: PositionOverlayBlurType = 'backdrop';

export const __DEFAULT_POSITION_OVERLAY_ITEM_PLACEMENT__: PositionOverlayItemPlacement = 'middle-center';

export const __DEFAULT_POSITION_OVERLAY_RADIUS__: ThemeRadius = 'none';

export const __DEFAULT_POSITION_OVERLAY_IS_VISIBLE__ = false;
export const __DEFAULT_POSITION_OVERLAY_HAS_GLASS__ = true;
export const __DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND__ = true;
