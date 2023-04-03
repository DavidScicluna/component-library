import { Theme as CUITheme } from '@chakra-ui/react';

export type ColorHues = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type Color =
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

export type Colors = Record<Color, string | Record<ColorHues, string>>;

export type Font = 'body' | 'heading' | 'mono';

export type Fonts = Record<Font, string>;

export type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';

export type FontSizes = Record<FontSize, string>;

export type LineHeight = 'base' | 'none' | 'normal' | 'short' | 'shorter' | 'tall' | 'taller';

export type LineHeights = Record<LineHeight, number | string>;

export type Radius = 'none' | 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'full';

export type Radii = Record<Radius, string>;

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
	| 20.75;

export type Spacing = Record<Space, string>;

export type Ease = 'ease-in' | 'ease-out' | 'ease-in-out';

export type Easings = Record<Ease, string>;

export type Duration = 'ultra-fast' | 'faster' | 'fast' | 'normal' | 'slow' | 'slower' | 'ultra-slow';

export type Durations = Record<Duration, string>;

export type Transition = {
	easing: Easings;
	duration: Durations;
};

export type ZIndice =
	| 'hide'
	| 'auto'
	| 'base'
	| 'docked'
	| 'dropdown'
	| 'sticky'
	| 'banner'
	| 'overlay'
	| 'modal'
	| 'popover'
	| 'skipLink'
	| 'toast'
	| 'tooltip';

export type ZIndices = Record<ZIndice, string | number>;

export type Theme = {
	colors: Colors;
	lineHeights: LineHeights;
	radii: Radii;
	space: Spacing;
	transition: Transition;
} & Omit<CUITheme, 'colors' | 'lineHeights' | 'radii' | 'space' | 'transition'>;
