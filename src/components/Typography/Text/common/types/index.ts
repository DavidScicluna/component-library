import { ResponsiveValue, Space } from '../../../../../common/types';
import { BoxProps, BoxRef } from '../../../../Layout/Box/common/types';

export type TextElementType = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TextAlign = 'left' | 'center' | 'right' | 'justify' | 'start' | 'end';
export type TextFontSize =
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
export type TextFontWeight =
	| 'thin'
	| 'extralight'
	| 'light'
	| 'normal'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'extrabold'
	| 'black';
export type TextLineHeight = 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose' | number;
export type TextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'normal';
export type TextWhitespace = 'normal' | 'nowrap' | 'pre	white' | 'pre-line' | 'pre-wrap' | 'break-spaces';
export type TextWordBreak = 'normal' | 'words' | 'all' | 'keep';

export type TextProps<Element extends TextElementType> = Omit<
	BoxProps<Element, { spacing?: ResponsiveValue<Space> }>,
	'children'
> & {
	children?: string;
	align?: ResponsiveValue<TextAlign>;
	fontSize?: ResponsiveValue<TextFontSize>;
	fontWeight?: ResponsiveValue<TextFontWeight>;
	lineHeight?: ResponsiveValue<TextLineHeight>;
	transform?: ResponsiveValue<TextTransform>;
	isItalic?: ResponsiveValue<boolean>;
	isOverflown?: ResponsiveValue<boolean>;
	whitespace?: ResponsiveValue<TextWhitespace>;
	wordBreak?: ResponsiveValue<TextWordBreak>;
};

export type TextRef<Element extends TextElementType> = BoxRef<Element>;
