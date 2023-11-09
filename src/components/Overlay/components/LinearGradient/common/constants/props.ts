import { __DEFAULT_APP_COLOR__, __DEFAULT_APP_COLORMODE__ } from '@common/constants';

import type { LinearGradientColor, LinearGradientDirection } from '../types';

export const __DEFAULT_LINEAR_GRADIENT_DIRECTION__: LinearGradientDirection = 'r';

export const __DEFAULT_LINEAR_GRADIENT_FROM__: LinearGradientColor = {
	color: __DEFAULT_APP_COLOR__,
	colorMode: __DEFAULT_APP_COLORMODE__,
	hueType: 'default',
	position: 0
};
export const __DEFAULT_LINEAR_GRADIENT_MIDDLE__: LinearGradientColor = {
	color: __DEFAULT_APP_COLOR__,
	colorMode: __DEFAULT_APP_COLORMODE__,
	hueType: 'default',
	position: 50
};
export const __DEFAULT_LINEAR_GRADIENT_TO__: LinearGradientColor = {
	color: __DEFAULT_APP_COLOR__,
	colorMode: __DEFAULT_APP_COLORMODE__,
	hueType: 'default',
	position: 100
};
