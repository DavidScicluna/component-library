import { v4 as uuid } from 'uuid';

import { DEFAULT_CLASS_PREFIX } from '@common/constants';
import type { ThemeRadius } from '@common/types';

import type { CardDefaultElement, CardVariant } from '../types';

export const DEFAULT_CARD_AS: CardDefaultElement = 'div';

export const DEFAULT_CARD_ID = `${DEFAULT_CLASS_PREFIX}-${uuid()}`;

export const DEFAULT_CARD_IS_ACTIVE = false;
export const DEFAULT_CARD_IS_CLICKABLE = false;
export const DEFAULT_CARD_IS_COLLAPSABLE = false;
export const DEFAULT_CARD_IS_DISABLED = false;
export const DEFAULT_CARD_IS_DIVISIBLE = true;
export const DEFAULT_CARD_IS_HOVERING = false;
export const DEFAULT_CARD_IS_FIXED = false;
export const DEFAULT_CARD_IS_OPEN = false;
export const DEFAULT_CARD_IS_OUTLINED = false;

export const DEFAULT_CARD_RADIUS: ThemeRadius = 'lg';

export const DEFAULT_CARD_VARIANT: CardVariant = 'monochrome';
