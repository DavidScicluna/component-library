import { v4 as uuid } from 'uuid';

import { __DEFAULT_CLASS_PREFIX__ } from '@common/constants';
import type { ThemeRadius } from '@common/types';

import type { CardDefaultElement, CardVariant } from '../types';

export const __DEFAULT_CARD_AS__: CardDefaultElement = 'div';

export const __DEFAULT_CARD_ID__ = `${__DEFAULT_CLASS_PREFIX__}-${uuid()}`;

export const __DEFAULT_CARD_IS_ACTIVE__ = false;
export const __DEFAULT_CARD_IS_CLICKABLE__ = false;
export const __DEFAULT_CARD_IS_COLLAPSABLE__ = false;
export const __DEFAULT_CARD_IS_DISABLED__ = false;
export const __DEFAULT_CARD_IS_DIVISIBLE__ = true;
export const __DEFAULT_CARD_IS_HOVERING__ = false;
export const __DEFAULT_CARD_IS_FIXED__ = false;
export const __DEFAULT_CARD_IS_OPEN__ = false;
export const __DEFAULT_CARD_IS_OUTLINED__ = false;

export const __DEFAULT_CARD_RADIUS__: ThemeRadius = 'lg';

export const __DEFAULT_CARD_VARIANT__: CardVariant = 'monochrome';
