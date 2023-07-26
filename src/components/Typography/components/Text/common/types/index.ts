import type { ResponsiveValue } from '@common/types';
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

import { __DEFAULT_TEXT_ELEMENT__ } from '../constants';

export type TextElementType = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TextOtherProps = {
	align?: ResponsiveValue<TextAlign>;
	fontSize?: ResponsiveValue<FontSize>;
	fontWeight?: ResponsiveValue<FontWeight>;
	lineHeight?: ResponsiveValue<LineHeight>;
	transform?: ResponsiveValue<TextTransform>;
	isItalic?: ResponsiveValue<boolean>;
	isOverflown?: ResponsiveValue<boolean>;
	whitespace?: ResponsiveValue<Whitespace>;
	wordBreak?: ResponsiveValue<WordBreak>;
};

export type TextProps<Element extends TextElementType = typeof __DEFAULT_TEXT_ELEMENT__> = Omit<
	BoxProps<Element, TextOtherProps>,
	'children'
> & {
	children?: string;
};

export type TextRef<Element extends TextElementType = typeof __DEFAULT_TEXT_ELEMENT__> = BoxRef<Element>;
