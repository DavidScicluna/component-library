import memoize from 'micro-memoize';

import classes from '@common/classes';
import theme from '@common/theme';
import type { ColorTypeClass, ThemeAppColorMode, ThemeColor, ThemeColorHue } from '@common/types';

export type ColorHueType =
	| 'background'
	| 'text.primary'
	| 'text.secondary'
	| 'divider'
	| 'midLight'
	| 'midLighter'
	| 'midDark'
	| 'midDarker'
	| 'light'
	| 'lighter'
	| 'lightest'
	| 'dark'
	| 'darker'
	| 'darkest'
	| 'color'
	| 'default';

export type GetColorHueProps = {
	colorMode: ThemeAppColorMode;
	type: ColorHueType;
};

/**
 * This method will return the appropriate color hue depending on the colorMode & type params passed
 *
 * @param colorMode - light | dark
 * @param type - background | text.primary | text.secondary | divider | light | lighter | lightest | dark | darker | darkest | color | default
 * @returns - 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
 */
export const getColorHue = memoize(({ colorMode, type }: GetColorHueProps): ThemeColorHue => {
	switch (type) {
		case 'background':
			return colorMode === 'light' ? 50 : 950;
		case 'text.primary':
			return colorMode === 'light' ? 950 : 50;
		case 'text.secondary':
			return colorMode === 'light' ? 600 : 400;
		case 'divider':
			return colorMode === 'light' ? 200 : 800;
		case 'midLight':
			return 400;
		case 'midLighter':
			return 300;
		case 'light':
			return 200;
		case 'lighter':
			return 100;
		case 'lightest':
			return 50;
		case 'midDark':
			return 600;
		case 'midDarker':
			return 700;
		case 'dark':
			return 800;
		case 'darker':
			return 900;
		case 'darkest':
			return 950;
		case 'color':
			return colorMode === 'light' ? 600 : 400;
		case 'default':
			return 500;
	}
});

export type GetColorHexProps = {
	color: ThemeColor;
	colorMode: ThemeAppColorMode;
	hueType: ColorHueType;
};

/**
 * This method will return the appropriate hex color depending on the color, colorMode & type params passed
 *
 * @param color - transparent | black | white | gray | red | pink | purple | deep_purple | indigo | blue | light_blue | cyan | teal | green | light_green | lime | yellow | orange | deep_orange
 * @param colorMode - light | dark
 * @param hueType - background | text.primary | text.secondary | divider | light | lighter | lightest | dark | darker | darkest | color | default
 * @returns - Hex Color
 */
export const getColorHex = memoize(({ color, colorMode, hueType }: GetColorHexProps): string => {
	const hue = getColorHue({ colorMode, type: hueType });
	return theme.colors[color][hue];
});

export type GetColorClassProps = {
	color: ThemeColor;
	colorMode: ThemeAppColorMode;
	hueType: ColorHueType;
	classType: ColorTypeClass;
};

/**
 * This method will return the appropriate hex color depending on the color, colorMode & type params passed
 *
 * @param color - transparent | black | white | gray | red | pink | purple | deep_purple | indigo | blue | light_blue | cyan | teal | green | light_green | lime | yellow | orange | deep_orange
 * @param colorMode - light | dark
 * @param hueType - background | text.primary | text.secondary | divider | light | lighter | lightest | dark | darker | darkest | color | default
 * @param classType - 'bg' | 'text'
 * @returns - Classname
 */
export const getColorClass = memoize(({ color, colorMode, hueType, classType }: GetColorClassProps): string => {
	const hue = getColorHue({ colorMode, type: hueType });
	switch (classType) {
		case 'shadow':
			return classes.effects.color[color][hue];
		case 'fill':
			return classes.svg.fill[color][hue];
		case 'bg':
			return classes.backgrounds.color[color][hue];
		case 'text':
			return classes.typography.color[color][hue];
		case 'border':
			return classes.borders.border_color[color][hue];
		case 'outline':
			return classes.borders.outline_color[color][hue];
	}
});

/**
 * This method will return the appropriate colorMode depending on the user os settings
 *
 * @returns - light | dark
 */
export const getColorMode = memoize((): ThemeAppColorMode => {
	if (globalThis?.window?.matchMedia && globalThis?.window?.matchMedia('(prefers-color-scheme: dark)')?.matches) {
		return 'dark';
	}
	return 'light';
});
