import type {
	PickFrom,
	PolymorphicElementType,
	ResponsiveValue,
	TextAlignClass,
	TextLineClampClass,
	TextTransformClass,
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
	Pick<ThemeAppearanceProps, 'colorMode'> & { color: ThemeAppearanceProps['color'] | string }
>;

type TextOtherProps = TextThemeAppearanceProps & {
	align?: ResponsiveValue<TextAlignClass>;
	fontSize?: ResponsiveValue<ThemeFontSize>;
	fontWeight?: ResponsiveValue<ThemeFontWeight>;
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
