import type { ElementType } from 'react';

import type { PickFrom, ResponsiveValue } from '@common/types';
import type { TextColor, TextLineClamp } from '@common/types/classes';
import type {
	FontSize,
	FontWeight,
	LineHeight,
	TextAlign,
	TextTransform,
	Whitespace,
	WordBreak
} from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type TextDefaultElement = 'p';
export type TextElement = PickFrom<ElementType, 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

type TextOtherProps = {
	align?: ResponsiveValue<TextAlign>;
	color: TextColor | string;
	fontSize?: ResponsiveValue<FontSize>;
	fontWeight?: ResponsiveValue<FontWeight>;
	lineClamp?: ResponsiveValue<TextLineClamp>;
	lineHeight?: ResponsiveValue<LineHeight>;
	textTransform?: ResponsiveValue<TextTransform>;
	isItalic?: ResponsiveValue<boolean>;
	isOverflown?: ResponsiveValue<boolean>;
	whitespace?: ResponsiveValue<Whitespace>;
	wordBreak?: ResponsiveValue<WordBreak>;
};

export type TextProps<Element extends TextElement = TextDefaultElement> = BoxProps<Element, TextOtherProps>;

export type TextRef<Element extends TextElement = TextDefaultElement> = BoxRef<Element>;
