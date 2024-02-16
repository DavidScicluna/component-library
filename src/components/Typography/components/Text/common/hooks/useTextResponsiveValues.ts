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
	__DEFAULT_TEXT_ALIGN__,
	__DEFAULT_TEXT_DECORATION__,
	__DEFAULT_TEXT_FONT_SIZE__,
	__DEFAULT_TEXT_FONT_WEIGHT__,
	__DEFAULT_TEXT_IS_ITALIC__,
	__DEFAULT_TEXT_IS_OVERFLOWN__,
	__DEFAULT_TEXT_LETTER_SPACING__,
	__DEFAULT_TEXT_LINE_CLAMP__,
	__DEFAULT_TEXT_LINE_HEIGHT__,
	__DEFAULT_TEXT_TRANSFORM__,
	__DEFAULT_TEXT_USER_SELECT__,
	__DEFAULT_TEXT_WHITESPACE__,
	__DEFAULT_TEXT_WORD_BREAK__
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
		align: alignProp = __DEFAULT_TEXT_ALIGN__,
		decoration: decorationProp = __DEFAULT_TEXT_DECORATION__,
		fontSize: fontSizeProp = __DEFAULT_TEXT_FONT_SIZE__,
		fontWeight: fontWeightProp = __DEFAULT_TEXT_FONT_WEIGHT__,
		letterSpacing: letterSpacingProp = __DEFAULT_TEXT_LETTER_SPACING__,
		lineClamp: lineClampProp = __DEFAULT_TEXT_LINE_CLAMP__,
		lineHeight: lineHeightProp = __DEFAULT_TEXT_LINE_HEIGHT__,
		textTransform: textTransformProp = __DEFAULT_TEXT_TRANSFORM__,
		isItalic: isItalicProp = __DEFAULT_TEXT_IS_ITALIC__,
		isOverflown: isOverflownProp = __DEFAULT_TEXT_IS_OVERFLOWN__,
		whiteSpace: whiteSpaceProp = __DEFAULT_TEXT_WHITESPACE__,
		wordBreak: wordBreakProp = __DEFAULT_TEXT_WORD_BREAK__,
		userSelect: userSelectProp = __DEFAULT_TEXT_USER_SELECT__
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
