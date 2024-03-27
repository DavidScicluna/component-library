import type { NonUndefined } from 'utility-types';

import type {
	PickFrom,
	PolymorphicElementType,
	ResponsiveValueProps,
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
export type TextElement = PickFrom<PolymorphicElementType, 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'>;

export type TextThemeAppearanceProps = Partial<
	Pick<ThemeAppearanceProps, 'colorMode'> & { color: ThemeAppearanceProps['color'] | string }
>;

export type TextDecorationProps = {
	color: NonUndefined<ThemeAppearanceProps['color']> | string;
	style: TextDecorationStyleClass;
	thickness: TextDecorationThicknessClass;
	offset: TextUnderlineOffsetClass;
	variant: TextDecorationClass;
};

export type TextNonResponsiveValueProps = {
	align?: TextAlignClass;
	decoration?: TextDecorationProps;
	fontSize?: ThemeFontSize;
	fontWeight?: ThemeFontWeight;
	letterSpacing?: TextLetterSpacingClass;
	lineClamp?: TextLineClampClass;
	lineHeight?: ThemeLineHeight;
	textTransform?: TextTransformClass;
	isItalic?: boolean;
	isOverflown?: boolean;
	whiteSpace?: WhiteSpaceClass;
	wordBreak?: WordBreakClass;
	userSelect?: UserSelectClass;
};
export type TextResponsiveValueProps = ResponsiveValueProps<TextNonResponsiveValueProps>;

export type TextUniqueProps = TextThemeAppearanceProps & TextResponsiveValueProps;

export type TextProps<Element extends TextElement> = BoxProps<Element, TextUniqueProps>;

export type TextRef<Element extends TextElement> = BoxRef<Element>;
