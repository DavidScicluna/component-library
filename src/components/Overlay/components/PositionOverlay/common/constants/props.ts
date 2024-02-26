import type { ThemeBlurClass, ThemeRadius } from '@common/types';

import type { PositionOverlayBlurType, PositionOverlayItemPlacement, PositionOverlayItems } from '../types';

export const DEFAULT_POSITION_OVERLAY_ITEMS: PositionOverlayItems = [];

export const DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT = 0.5;

export const DEFAULT_POSITION_OVERLAY_BLUR: ThemeBlurClass = 'md';
export const DEFAULT_POSITION_OVERLAY_BLUR_TYPE: PositionOverlayBlurType = 'backdrop';

export const DEFAULT_POSITION_OVERLAY_ITEM_PLACEMENT: PositionOverlayItemPlacement = 'middle-center';

export const DEFAULT_POSITION_OVERLAY_RADIUS: ThemeRadius = 'none';

export const DEFAULT_POSITION_OVERLAY_IS_VISIBLE = false;
export const DEFAULT_POSITION_OVERLAY_HAS_GLASS = true;
export const DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND = true;
