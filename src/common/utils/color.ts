import memoize from 'micro-memoize';

import classes from '@common/classes';
import theme from '@common/theme';
import type { ColorTypeClass, PickFrom, ThemeAppColorMode, ThemeColor, ThemeColorHue } from '@common/types';

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

type GetColorHexHueColor = Exclude<ThemeColor, 'transparent' | 'black' | 'white'>;
type GetColorHexHueProps = { color: GetColorHexHueColor; hueType: ColorHueType };

type GetColorHexNonHueColor = PickFrom<ThemeColor, 'transparent' | 'black' | 'white'>;
type GetColorHexNonHueProps = { color: GetColorHexNonHueColor };

export type GetColorHexProps = {
	colorMode: ThemeAppColorMode;
} & (GetColorHexHueProps | GetColorHexNonHueProps);

/**
 * This method will return the appropriate hex color depending on the color, colorMode & type params passed
 *
 * @param color - transparent | black | white | gray | red | pink | purple | deep_purple | indigo | blue | light_blue | cyan | teal | green | light_green | lime | yellow | orange | deep_orange
 * @param colorMode - light | dark
 * @param hueType - background | text.primary | text.secondary | divider | light | lighter | lightest | dark | darker | darkest | color | default
 * @returns - Hex Color
 */
export const getColorHex = memoize((props: GetColorHexProps): string => {
	const { color, colorMode } = props;
	if (color !== 'transparent' && color !== 'black' && color !== 'white') {
		const { hueType } = props as GetColorHexHueProps;
		const hue = getColorHue({ colorMode, type: hueType });
		return theme.colors[color as GetColorHexHueColor][hue];
	} else {
		return theme.colors[color as GetColorHexNonHueColor];
	}
});

type GetColorClassHueColor = Exclude<ThemeColor, 'transparent' | 'black' | 'white'>;
type GetColorClassHueProps = { color: GetColorClassHueColor; hueType: ColorHueType };

type GetColorClassNonHueColor = PickFrom<ThemeColor, 'transparent' | 'black' | 'white'>;
type GetColorClassNonHueProps = { color: GetColorClassNonHueColor };

export type GetColorClassProps = {
	colorMode: ThemeAppColorMode;
	classType: ColorTypeClass;
} & (GetColorClassHueProps | GetColorClassNonHueProps);

/**
 * This method will return the appropriate color class depending on the color, colorMode & type params passed
 *
 * @param color - transparent | black | white | gray | red | pink | purple | deep_purple | indigo | blue | light_blue | cyan | teal | green | light_green | lime | yellow | orange | deep_orange
 * @param colorMode - light | dark
 * @param hueType - background | text.primary | text.secondary | divider | light | lighter | lightest | dark | darker | darkest | color | default
 * @param classType - 'bg' | 'text'
 * @returns - Classname
 */
export const getColorClass = memoize((props: GetColorClassProps): string => {
	const { color, colorMode, classType } = props;
	if (color !== 'transparent' && color !== 'black' && color !== 'white') {
		const { hueType } = props as GetColorClassHueProps;
		const hue = getColorHue({ colorMode, type: hueType });
		switch (classType) {
			case 'shadow':
				return classes.effects.shadow_color[color as GetColorClassHueColor][hue];
			case 'fill':
				return classes.svg.fill[color as GetColorClassHueColor][hue];
			case 'bg':
				return classes.backgrounds.background_color[color as GetColorClassHueColor][hue];
			case 'text':
				return classes.typography.text_color[color as GetColorClassHueColor][hue];
			case 'border':
				return classes.borders.border_color[color as GetColorClassHueColor][hue];
			case 'outline':
				return classes.borders.outline_color[color as GetColorClassHueColor][hue];
			case 'decoration':
				return classes.typography.text_decoration_color[color as GetColorClassHueColor][hue];
			case 'gradient_from_color':
				return classes.backgrounds.gradient_from_color[color as GetColorClassHueColor][hue];
			case 'gradient_middle_color':
				return classes.backgrounds.gradient_middle_color[color as GetColorClassHueColor][hue];
			case 'gradient_to_color':
				return classes.backgrounds.gradient_to_color[color as GetColorClassHueColor][hue];
		}
	} else {
		switch (classType) {
			case 'shadow':
				return classes.effects.shadow_color[color as GetColorClassNonHueColor];
			case 'fill':
				return classes.svg.fill[color as GetColorClassNonHueColor];
			case 'bg':
				return classes.backgrounds.background_color[color as GetColorClassNonHueColor];
			case 'text':
				return classes.typography.text_color[color as GetColorClassNonHueColor];
			case 'border':
				return classes.borders.border_color[color as GetColorClassNonHueColor];
			case 'outline':
				return classes.borders.outline_color[color as GetColorClassNonHueColor];
			case 'decoration':
				return classes.typography.text_decoration_color[color as GetColorClassNonHueColor];
			case 'gradient_from_color':
				return classes.backgrounds.gradient_from_color[color as GetColorClassNonHueColor];
			case 'gradient_middle_color':
				return classes.backgrounds.gradient_middle_color[color as GetColorClassNonHueColor];
			case 'gradient_to_color':
				return classes.backgrounds.gradient_to_color[color as GetColorClassNonHueColor];
		}
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
