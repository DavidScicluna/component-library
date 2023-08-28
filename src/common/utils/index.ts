import { getAnimationConfig, getAnimationDelay, getAnimationDuration, getAnimationEasings } from './animation';
import { getClass } from './classes';
import type { ColorHueType, GetColorClassProps, GetColorHexProps, GetColorHueProps } from './color';
import { getColorClass, getColorHex, getColorHue, getColorMode } from './color';
import { getFontSizeHeight, getIconFontFamily } from './fonts';
import { checkIsTouchDevice, convertPixelsToREM, convertREMToPixels, convertStringToNumber } from './other';
import { getResponsiveValue } from './responsive';

export type { ColorHueType, GetColorClassProps, GetColorHexProps, GetColorHueProps };

export {
	checkIsTouchDevice,
	convertPixelsToREM,
	convertREMToPixels,
	convertStringToNumber,
	getAnimationConfig,
	getAnimationDelay,
	getAnimationDuration,
	getAnimationEasings,
	getClass,
	getColorClass,
	getColorHex,
	getColorHue,
	getColorMode,
	getFontSizeHeight,
	getIconFontFamily,
	getResponsiveValue
};
