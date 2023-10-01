import { v4 as uuid } from 'uuid';

import type { CarouselItems, CarouselOrientation, CarouselScrollAmount, CarouselVariant } from '../types';

export const __DEFAULT_CAROUSEL_ID__ = uuid();
export const __DEFAULT_CAROUSEL_ITEMS__: CarouselItems = [];

export const __DEFAULT_CAROUSEL_SCROLL_AMOUNT__: CarouselScrollAmount = 3;

export const __DEFAULT_CAROUSEL_ORIENTTATION__: CarouselOrientation = 'horizontal';

export const __DEFAULT_CAROUSEL_VARIANT__: CarouselVariant = 'overlay';
