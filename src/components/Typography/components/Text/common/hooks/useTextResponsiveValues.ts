import { useGetResponsiveValue } from '@common/hooks';
import type {
	TextAlignClass,
	TextLetterSpacingClass,
	TextLineClampClass,
	TextTransformClass,
	ThemeFontSize,
	ThemeFontWeight,
	ThemeLineHeight,
	UserSelectClass,
	WhiteSpaceClass,
	WordBreakClass
} from '@common/types';

import {
	DEFAULT_TEXT_ALIGN,
	DEFAULT_TEXT_DECORATION,
	DEFAULT_TEXT_FONT_SIZE,
	DEFAULT_TEXT_FONT_WEIGHT,
	DEFAULT_TEXT_IS_ITALIC,
	DEFAULT_TEXT_IS_OVERFLOWN,
	DEFAULT_TEXT_LETTER_SPACING,
	DEFAULT_TEXT_LINE_CLAMP,
	DEFAULT_TEXT_LINE_HEIGHT,
	DEFAULT_TEXT_TRANSFORM,
	DEFAULT_TEXT_USER_SELECT,
	DEFAULT_TEXT_WHITESPACE,
	DEFAULT_TEXT_WORD_BREAK
} from '../constants';
import type { TextDecorationProps, TextElement, TextProps } from '../types';

type UseTextResponsiveValuesProps<Element extends TextElement> = Partial<
	Pick<
		TextProps<Element>,
		| 'align'
		| 'decoration'
		| 'fontSize'
		| 'fontWeight'
		| 'letterSpacing'
		| 'lineClamp'
		| 'lineHeight'
		| 'textTransform'
		| 'isItalic'
		| 'isOverflown'
		| 'whiteSpace'
		| 'wordBreak'
		| 'userSelect'
	>
>;

const useTextResponsiveValues = <Element extends TextElement>(props: UseTextResponsiveValuesProps<Element>) => {
	const {
		align: alignProp = DEFAULT_TEXT_ALIGN,
		decoration: decorationProp = DEFAULT_TEXT_DECORATION,
		fontSize: fontSizeProp = DEFAULT_TEXT_FONT_SIZE,
		fontWeight: fontWeightProp = DEFAULT_TEXT_FONT_WEIGHT,
		letterSpacing: letterSpacingProp = DEFAULT_TEXT_LETTER_SPACING,
		lineClamp: lineClampProp = DEFAULT_TEXT_LINE_CLAMP,
		lineHeight: lineHeightProp = DEFAULT_TEXT_LINE_HEIGHT,
		textTransform: textTransformProp = DEFAULT_TEXT_TRANSFORM,
		isItalic: isItalicProp = DEFAULT_TEXT_IS_ITALIC,
		isOverflown: isOverflownProp = DEFAULT_TEXT_IS_OVERFLOWN,
		whiteSpace: whiteSpaceProp = DEFAULT_TEXT_WHITESPACE,
		wordBreak: wordBreakProp = DEFAULT_TEXT_WORD_BREAK,
		userSelect: userSelectProp = DEFAULT_TEXT_USER_SELECT
	} = props;

	const align = useGetResponsiveValue<TextAlignClass>(alignProp);
	const decoration = useGetResponsiveValue<TextDecorationProps>(decorationProp);
	const fontSize = useGetResponsiveValue<ThemeFontSize>(fontSizeProp);
	const fontWeight = useGetResponsiveValue<ThemeFontWeight>(fontWeightProp);
	const letterSpacing = useGetResponsiveValue<TextLetterSpacingClass>(letterSpacingProp);
	const lineClamp = useGetResponsiveValue<TextLineClampClass>(lineClampProp);
	const lineHeight = useGetResponsiveValue<ThemeLineHeight>(lineHeightProp);
	const textTransform = useGetResponsiveValue<TextTransformClass>(textTransformProp);

	const isItalic = useGetResponsiveValue<boolean>(isItalicProp);
	const isOverflown = useGetResponsiveValue<boolean>(isOverflownProp);

	const whiteSpace = useGetResponsiveValue<WhiteSpaceClass>(whiteSpaceProp);
	const wordBreak = useGetResponsiveValue<WordBreakClass>(wordBreakProp);
	const userSelect = useGetResponsiveValue<UserSelectClass>(userSelectProp);

	return {
		align,
		decoration,
		fontSize,
		fontWeight,
		letterSpacing,
		lineClamp,
		lineHeight,
		textTransform,
		isItalic,
		isOverflown,
		whiteSpace,
		wordBreak,
		userSelect
	};
};

export default useTextResponsiveValues;
