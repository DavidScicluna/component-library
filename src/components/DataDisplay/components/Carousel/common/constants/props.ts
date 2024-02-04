import { v4 as uuid } from 'uuid';

import type { ThemeDuration } from '@common/types';
import { getAnimationDuration } from '@common/utils';

import type {
	CarouselDefaultElement,
	CarouselItems,
	CarouselOrientation,
	CarouselScrollAmount,
	CarouselVariant,
	CarouselVisibleItems
} from '../types';

export const __DEFAULT_CAROUSEL_AS__: CarouselDefaultElement = 'div';

export const __DEFAULT_CAROUSEL_DURATION_THEME__: ThemeDuration = 'normal';
export const __DEFAULT_CAROUSEL_DURATION_NUMBER__ = getAnimationDuration(__DEFAULT_CAROUSEL_DURATION_THEME__);

export const __DEFAULT_CAROUSEL_ID__ = uuid();
export const __DEFAULT_CAROUSEL_ITEMS__: CarouselItems = [];
export const __DEFAULT_CAROUSEL_VISIBLE_ITEMS__: CarouselVisibleItems = [];

export const __DEFAULT_CAROUSEL_SCROLL_AMOUNT__: CarouselScrollAmount = 3;

export const __DEFAULT_CAROUSEL_ORIENTTATION__: CarouselOrientation = 'horizontal';

export const __DEFAULT_CAROUSEL_VARIANT__: CarouselVariant = 'overlay';
