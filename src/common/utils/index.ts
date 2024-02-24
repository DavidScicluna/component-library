import { getAmount } from './amount';
import { getAnimationConfig, getAnimationDelay, getAnimationDuration, getAnimationEasings } from './animation';
import { getClass } from './classes';
import type {
	ColorHueType,
	FilterColorHexProps,
	GetColorClassProps,
	GetColorHexProps,
	GetColorHueProps
} from './color';
import { filterColorHex, getColorClass, getColorHex, getColorHue, getColorMode } from './color';
import { getFontSizeHeight, getIconFontFamily } from './fonts';
import { getPercentage } from './number';
import {
	// checkIsTouchDevice,
	convertPixelsToREM,
	convertREMToPixels,
	convertStringToNumber
} from './other';
import { getResponsiveValue } from './responsive';
import { checkColorType, checkDurationType, checkFontSizeType } from './theme';

export type { ColorHueType, FilterColorHexProps, GetColorClassProps, GetColorHexProps, GetColorHueProps };

export {
	checkColorType,
	checkDurationType,
	checkFontSizeType,
	// checkIsTouchDevice,
	convertPixelsToREM,
	convertREMToPixels,
	convertStringToNumber,
	filterColorHex,
	getAmount,
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
	getPercentage,
	getResponsiveValue
};
