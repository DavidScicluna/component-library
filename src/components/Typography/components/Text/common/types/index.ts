import type { ElementType } from 'react';

import type {
	PickFrom,
	ResponsiveValue,
	TextLineClampClass,
	ThemeFontSize,
	ThemeFontWeight,
	ThemeLineHeight,
	ThemeTextAlign,
	ThemeTextTransform,
	ThemeWhitespace,
	ThemeWordBreak
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type TextDefaultElement = 'p';
export type TextElement = PickFrom<ElementType, 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

type TextOtherProps = {
	align?: ResponsiveValue<ThemeTextAlign>;
	color: string;
	fontSize?: ResponsiveValue<ThemeFontSize>;
	fontWeight?: ResponsiveValue<ThemeFontWeight>;
	lineClamp?: ResponsiveValue<TextLineClampClass>;
	lineHeight?: ResponsiveValue<ThemeLineHeight>;
	textTransform?: ResponsiveValue<ThemeTextTransform>;
	isItalic?: ResponsiveValue<boolean>;
	isOverflown?: ResponsiveValue<boolean>;
	whitespace?: ResponsiveValue<ThemeWhitespace>;
	wordBreak?: ResponsiveValue<ThemeWordBreak>;
};

export type TextProps<Element extends TextElement = TextDefaultElement> = BoxProps<Element, TextOtherProps>;

export type TextRef<Element extends TextElement = TextDefaultElement> = BoxRef<Element>;
