// TODO: Replace all types to have Theme included in the name
export type AppColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray'>;
export type AppColors = AppColor[];

export type AppColorMode = Exclude<ColorMode, 'system'>;

export type Color =
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
export type ColorsArr = Color[];
export type ColorsObj = Record<Color, string | Record<ColorHue, string>>;

export type ColorHue = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
export type ColorHues = ColorHue[];

export type ColorMode = 'light' | 'system' | 'dark';

export type CommonThemeProps = Partial<{
	color: AppColor;
	colorMode: AppColorMode;
}>;

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type BreakpointsArr = Breakpoint[];
export type BreakpointsObj = Record<Breakpoint, string>;

export type Radius = 'none' | 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'full';
export type RadiiArr = Radius[];
export type RadiiObj = Record<Radius, string>;

export type Ease = 'ease-in' | 'ease-out' | 'ease-in-out';
export type EasingsArr = Ease[];
export type EasingsObj = Record<Ease, string>;

export type Duration = 'ultra-fast' | 'faster' | 'fast' | 'normal' | 'slow' | 'slower' | 'ultra-slow';
export type DurationsArr = Duration[];
export type DurationsObj = Record<Duration, string>;

export type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
export type FontSizesArr = FontSize[];
export type FontSizesObj = Record<FontSize, string>;

export type FontWeight =
	| 'thin'
	| 'extralight'
	| 'light'
	| 'normal'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'extrabold'
	| 'black';
export type FontWeightsArr = FontWeight[];
export type FontWeightsObj = Record<FontWeight, number>;

export type TextAlign = 'left' | 'center' | 'right' | 'justify' | 'start' | 'end';
export type TextAlignsArr = TextAlign[];
export type TextAlignsObj = Record<TextAlign, string>;

export type TextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'normal';
export type TextTransformsArr = TextTransform[];
export type TextTransformsObj = Record<TextTransform, string>;

export type LineHeight = 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose' | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type LineHeightsArr = LineHeight[];
export type LineHeightsObj = Record<LineHeight, string | number>;

export type Whitespace = 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap' | 'break-spaces';
export type WhitespacesArr = Whitespace[];
export type WhitespacesObj = Record<Whitespace, string>;

export type WordBreak = 'normal' | 'words' | 'all' | 'keep';
export type WordBreaksArr = WordBreak[];
export type WordBreaksObj = Record<WordBreak, string>;

export type Space =
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
export type SpacingArr = Space[];
export type SpacingObj = Record<Space, string>;
