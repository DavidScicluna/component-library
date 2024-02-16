import type { NonUndefined } from 'utility-types';

import type {
	PickFrom,
	PolymorphicElementType,
	ResponsiveValue,
	TextAlignClass,
	TextDecorationClass,
	TextDecorationStyleClass,
	TextDecorationThicknessClass,
	TextLetterSpacingClass,
	TextLineClampClass,
	TextTransformClass,
	TextUnderlineOffsetClass,
	ThemeAppearanceProps,
	ThemeFontSize,
	ThemeFontWeight,
	ThemeLineHeight,
	UserSelectClass,
	WhiteSpaceClass,
	WordBreakClass
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type TextDefaultElement = 'p';
export type TextElement = PickFrom<
	PolymorphicElementType,
	'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'span'
>;

export type TextThemeAppearanceProps = Partial<
	Pick<ThemeAppearanceProps, 'colorMode'> & { color: NonUndefined<ThemeAppearanceProps['color']> | string }
>;

export type TextDecorationProps = {
	color: NonUndefined<ThemeAppearanceProps['color']> | string;
	style: TextDecorationStyleClass;
	thickness: TextDecorationThicknessClass;
	offset: TextUnderlineOffsetClass;
	variant: TextDecorationClass;
};

type TextOtherProps = TextThemeAppearanceProps & {
	align?: ResponsiveValue<TextAlignClass>;
	decoration?: ResponsiveValue<TextDecorationProps>;
	fontSize?: ResponsiveValue<ThemeFontSize>;
	fontWeight?: ResponsiveValue<ThemeFontWeight>;
	letterSpacing?: ResponsiveValue<TextLetterSpacingClass>;
	lineClamp?: ResponsiveValue<TextLineClampClass>;
	lineHeight?: ResponsiveValue<ThemeLineHeight>;
	textTransform?: ResponsiveValue<TextTransformClass>;
	isItalic?: ResponsiveValue<boolean>;
	isOverflown?: ResponsiveValue<boolean>;
	whiteSpace?: ResponsiveValue<WhiteSpaceClass>;
	wordBreak?: ResponsiveValue<WordBreakClass>;
	userSelect?: ResponsiveValue<UserSelectClass>;
};

export type TextProps<Element extends TextElement> = BoxProps<Element, TextOtherProps>;

export type TextRef<Element extends TextElement> = BoxRef<Element>;
