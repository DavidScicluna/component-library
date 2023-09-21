import type { OpacityClassObj } from './classes';
import type { PickFrom } from './utility';

export type ThemeAppColor = Exclude<ThemeColor, 'transparent' | 'black' | 'white' | 'gray'>;
export type ThemeAppColorArr = Array<ThemeAppColor>;
export type ThemeAppColorObj = Record<ThemeAppColor, string>;

export type ThemeAppColorMode = Exclude<ThemeColorMode, 'system'>;

export type ThemeAppearanceProps = Partial<{
	color: ThemeColor;
	colorMode: ThemeAppColorMode;
}>;

export type ThemeAppAppearanceProps = Partial<{
	color: ThemeAppColor;
	colorMode: ThemeAppColorMode;
}>;

export type ThemeAspectRatio = 'auto' | 'square' | 'video' | 'widescreen' | 'portrait' | 'standard' | 'vertical';
export type ThemeAspectRatioArr = Array<ThemeAspectRatio>;
export type ThemeAspectRatioObj = Record<ThemeAspectRatio, string>;

export type ThemeBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ThemeBreakpointArr = Array<ThemeBreakpoint>;
export type ThemeBreakpointObj = Record<ThemeBreakpoint, string>;

export type ThemeBorderWidth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type ThemeBorderWidthArr = Array<ThemeBorderWidth>;
export type ThemeBorderWidthObj = Record<ThemeBorderWidth, string>;

export type ThemeColor =
	| 'transparent'
	| 'black'
	| 'white'
	| 'gray'
	| 'red'
	| 'pink'
	| 'purple'
	| 'deep_purple'
	| 'indigo'
	| 'blue'
	| 'light_blue'
	| 'cyan'
	| 'teal'
	| 'green'
	| 'light_green'
	| 'lime'
	| 'yellow'
	| 'orange'
	| 'deep_orange';
export type ThemeColorArr = Array<ThemeColor>;
export type ThemeColorObj = Record<
	Exclude<ThemeColor, 'transparent' | 'black' | 'white'>,
	Record<ThemeColorHue, string>
> &
	Record<PickFrom<ThemeColor, 'transparent' | 'black' | 'white'>, string>;

export type ThemeColorHue = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
export type ThemeColorHueArr = Array<ThemeColorHue>;
export type ThemeColorHueObj = Record<ThemeColorHue, string>;

export type ThemeColorOpacityObj = Record<
	Exclude<ThemeColor, 'transparent' | 'black' | 'white'>,
	Record<ThemeColorHue, OpacityClassObj>
> &
	Record<PickFrom<ThemeColor, 'transparent' | 'black' | 'white'>, OpacityClassObj>;

export type ThemeColorMode = 'light' | 'system' | 'dark';
export type ThemeColorModeArr = Array<ThemeColorMode>;
export type ThemeColorModeObj = Record<ThemeColorMode, string>;

export type ThemeDelay = 'ultra-fast' | 'faster' | 'fast' | 'normal' | 'slow' | 'slower' | 'ultra-slow';
export type ThemeDelayArr = Array<ThemeDelay>;
export type ThemeDelayObj = Record<ThemeDelay, string>;

export type ThemeDuration = 'ultra-fast' | 'faster' | 'fast' | 'normal' | 'slow' | 'slower' | 'ultra-slow';
export type ThemeDurationArr = Array<ThemeDuration>;
export type ThemeDurationObj = Record<ThemeDuration, string>;

export type ThemeEase = 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
export type ThemeEaseArr = Array<ThemeEase>;
export type ThemeEaseObj = Record<ThemeEase, string>;

export type ThemeFontSize =
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl'
	| '7xl'
	| '8xl'
	| '9xl';
export type ThemeFontSizeArr = Array<ThemeFontSize>;
export type ThemeFontSizeObj = Record<ThemeFontSize, string>;

export type ThemeFontWeight =
	| 'thin'
	| 'extralight'
	| 'light'
	| 'normal'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'extrabold'
	| 'black';
export type ThemeFontWeightArr = Array<ThemeFontWeight>;
export type ThemeFontWeightObj = Record<ThemeFontWeight, string | number>;

export type ThemeLineHeight =
	| 'none'
	| 'tight'
	| 'snug'
	| 'normal'
	| 'relaxed'
	| 'loose'
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10;
export type ThemeLineHeightArr = Array<ThemeLineHeight>;
export type ThemeLineHeightObj = Record<ThemeLineHeight, string | number>;

export type ThemeRadius = 'none' | 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'full' | 'inherit';
export type ThemeRadiusArr = Array<ThemeRadius>;
export type ThemeRadiusObj = Record<ThemeRadius, string>;

export type ThemeSpacing =
	| 0
	| 0.25
	| 0.5
	| 0.75
	| 1
	| 1.25
	| 1.5
	| 1.75
	| 2
	| 2.25
	| 2.5
	| 2.75
	| 3
	| 3.25
	| 3.5
	| 3.75
	| 4
	| 4.25
	| 4.5
	| 4.75
	| 5
	| 5.25
	| 5.5
	| 5.75
	| 6
	| 6.25
	| 6.5
	| 6.75
	| 7
	| 7.25
	| 7.5
	| 7.75
	| 8
	| 8.25
	| 8.5
	| 8.75
	| 9
	| 9.25
	| 9.5
	| 9.75
	| 10
	| 10.25
	| 10.5
	| 10.75
	| 11
	| 11.25
	| 11.5
	| 11.75
	| 12
	| 12.25
	| 12.5
	| 12.75
	| 13
	| 13.25
	| 13.5
	| 13.75
	| 14
	| 14.25
	| 14.5
	| 14.75
	| 15
	| 15.25
	| 15.5
	| 15.75
	| 16
	| 16.25
	| 16.5
	| 16.75
	| 17
	| 17.25
	| 17.5
	| 17.75
	| 18
	| 18.25
	| 18.5
	| 18.75
	| 19
	| 19.25
	| 19.5
	| 19.75
	| 20
	| 20.25
	| 20.5
	| 20.75
	| 21
	| 21.25
	| 21.5
	| 21.75
	| 22
	| 22.25
	| 22.5
	| 22.75
	| 23
	| 23.25
	| 23.5
	| 23.75
	| 24
	| 24.25
	| 24.5
	| 24.75;
export type ThemeSpacingArr = Array<ThemeSpacing>;
export type ThemeSpacingObj = Record<ThemeSpacing, string>;

export type ThemeStrokeWidth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type ThemeStrokeWidthArr = Array<ThemeStrokeWidth>;
export type ThemeStrokeWidthObj = Record<ThemeStrokeWidth, string>;
