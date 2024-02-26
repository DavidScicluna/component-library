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

export const DEFAULT_CAROUSEL_AS: CarouselDefaultElement = 'div';

export const DEFAULT_CAROUSEL_DURATION_THEME: ThemeDuration = 'normal';
export const DEFAULT_CAROUSEL_DURATION_NUMBER = getAnimationDuration(DEFAULT_CAROUSEL_DURATION_THEME);

export const DEFAULT_CAROUSEL_ID = uuid();
export const DEFAULT_CAROUSEL_ITEMS: CarouselItems = [];
export const DEFAULT_CAROUSEL_VISIBLE_ITEMS: CarouselVisibleItems = [];

export const DEFAULT_CAROUSEL_SCROLL_AMOUNT: CarouselScrollAmount = 3;

export const DEFAULT_CAROUSEL_ORIENTTATION: CarouselOrientation = 'horizontal';

export const DEFAULT_CAROUSEL_VARIANT: CarouselVariant = 'overlay';
