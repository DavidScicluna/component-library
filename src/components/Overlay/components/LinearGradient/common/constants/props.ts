import { __DEFAULT_APP_COLOR__ } from '@common/constants';
import type { GradientFromMiddleToClass } from '@common/types';

import type { LinearGradientColor, LinearGradientDirection } from '../types';

export const __DEFAULT_LINEAR_GRADIENT_COLOR__: LinearGradientColor = {
	from: __DEFAULT_APP_COLOR__,
	to: __DEFAULT_APP_COLOR__
};

export const __DEFAULT_LINEAR_GRADIENT_DIRECTION__: LinearGradientDirection = 'r';

export const __DEFAULT_LINEAR_GRADIENT_FROM_POS__: GradientFromMiddleToClass = 0;
export const __DEFAULT_LINEAR_GRADIENT_MIDDLE_POS__: GradientFromMiddleToClass = 50;
export const __DEFAULT_LINEAR_GRADIENT_TO_POS__: GradientFromMiddleToClass = 100;
