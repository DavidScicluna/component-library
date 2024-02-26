import { DEFAULT_APP_COLOR, DEFAULT_APP_COLORMODE } from '@common/constants';

import type { LinearGradientColor, LinearGradientDirection } from '../types';

export const DEFAULT_LINEAR_GRADIENT_DIRECTION: LinearGradientDirection = 'r';

export const DEFAULT_LINEAR_GRADIENT_FROM: LinearGradientColor = {
	color: DEFAULT_APP_COLOR,
	colorMode: DEFAULT_APP_COLORMODE,
	hueType: 'default',
	position: 0
};
export const DEFAULT_LINEAR_GRADIENT_MIDDLE: LinearGradientColor = {
	color: DEFAULT_APP_COLOR,
	colorMode: DEFAULT_APP_COLORMODE,
	hueType: 'default',
	position: 50
};
export const DEFAULT_LINEAR_GRADIENT_TO: LinearGradientColor = {
	color: DEFAULT_APP_COLOR,
	colorMode: DEFAULT_APP_COLORMODE,
	hueType: 'default',
	position: 100
};
