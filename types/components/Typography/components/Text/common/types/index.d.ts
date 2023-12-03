import type { ElementType } from 'react';
import type { PickFrom, ResponsiveValue, TextAlignClass, TextLineClampClass, TextTransformClass, ThemeAppearanceProps, ThemeFontSize, ThemeFontWeight, ThemeLineHeight, WhitespaceClass, WordBreakClass } from '@common/types';
import type { BoxProps, BoxRef } from '@components/Box';
export type TextDefaultElement = 'p';
export type TextElement = PickFrom<ElementType, 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'span'>;
export type TextThemeAppearanceProps = Partial<Pick<ThemeAppearanceProps, 'colorMode'> & {
    color: ThemeAppearanceProps['color'] | string;
}>;
type TextOtherProps = TextThemeAppearanceProps & {
    align?: ResponsiveValue<TextAlignClass>;
    fontSize?: ResponsiveValue<ThemeFontSize>;
    fontWeight?: ResponsiveValue<ThemeFontWeight>;
    lineClamp?: ResponsiveValue<TextLineClampClass>;
    lineHeight?: ResponsiveValue<ThemeLineHeight>;
    textTransform?: ResponsiveValue<TextTransformClass>;
    isItalic?: ResponsiveValue<boolean>;
    isOverflown?: ResponsiveValue<boolean>;
    whitespace?: ResponsiveValue<WhitespaceClass>;
    wordBreak?: ResponsiveValue<WordBreakClass>;
};
export type TextProps<Element extends TextElement = TextDefaultElement> = BoxProps<Element, TextOtherProps>;
export type TextRef<Element extends TextElement = TextDefaultElement> = BoxRef<Element>;
export {};
//# sourceMappingURL=index.d.ts.map