import { useGetResponsiveValue } from '@common/hooks';
import type {
	TextAlignClass,
	TextLineClampClass,
	TextTransformClass,
	ThemeFontSize,
	ThemeFontWeight,
	ThemeLineHeight,
	WhitespaceClass,
	WordBreakClass
} from '@common/types';

import {
	__DEFAULT_TEXT_ALIGN__,
	__DEFAULT_TEXT_FONT_SIZE__,
	__DEFAULT_TEXT_FONT_WEIGHT__,
	__DEFAULT_TEXT_IS_ITALIC__,
	__DEFAULT_TEXT_IS_OVERFLOWN__,
	__DEFAULT_TEXT_LINE_CLAMP__,
	__DEFAULT_TEXT_LINE_HEIGHT__,
	__DEFAULT_TEXT_TRANSFORM__,
	__DEFAULT_TEXT_WHITESPACE__,
	__DEFAULT_TEXT_WORD_BREAK__
} from '../constants';
import type { TextProps } from '../types';

type UseTextResponsiveValuesProps = Partial<
	Pick<
		TextProps,
		| 'align'
		| 'fontSize'
		| 'fontWeight'
		| 'lineClamp'
		| 'lineHeight'
		| 'textTransform'
		| 'isItalic'
		| 'isOverflown'
		| 'whitespace'
		| 'wordBreak'
	>
>;

const useTextResponsiveValues = (props: UseTextResponsiveValuesProps) => {
	const {
		align: alignProp = __DEFAULT_TEXT_ALIGN__,
		fontSize: fontSizeProp = __DEFAULT_TEXT_FONT_SIZE__,
		fontWeight: fontWeightProp = __DEFAULT_TEXT_FONT_WEIGHT__,
		lineClamp: lineClampProp = __DEFAULT_TEXT_LINE_CLAMP__,
		lineHeight: lineHeightProp = __DEFAULT_TEXT_LINE_HEIGHT__,
		textTransform: textTransformProp = __DEFAULT_TEXT_TRANSFORM__,
		isItalic: isItalicProp = __DEFAULT_TEXT_IS_ITALIC__,
		isOverflown: isOverflownProp = __DEFAULT_TEXT_IS_OVERFLOWN__,
		whitespace: whitespaceProp = __DEFAULT_TEXT_WHITESPACE__,
		wordBreak: wordBreakProp = __DEFAULT_TEXT_WORD_BREAK__
	} = props;

	const align = useGetResponsiveValue<TextAlignClass>(alignProp);
	const fontSize = useGetResponsiveValue<ThemeFontSize>(fontSizeProp);
	const fontWeight = useGetResponsiveValue<ThemeFontWeight>(fontWeightProp);
	const lineClamp = useGetResponsiveValue<TextLineClampClass>(lineClampProp);
	const lineHeight = useGetResponsiveValue<ThemeLineHeight>(lineHeightProp);
	const textTransform = useGetResponsiveValue<TextTransformClass>(textTransformProp);

	const isItalic = useGetResponsiveValue<boolean>(isItalicProp);
	const isOverflown = useGetResponsiveValue<boolean>(isOverflownProp);

	const whitespace = useGetResponsiveValue<WhitespaceClass>(whitespaceProp);
	const wordBreak = useGetResponsiveValue<WordBreakClass>(wordBreakProp);

	return {
		align,
		fontSize,
		fontWeight,
		lineClamp,
		lineHeight,
		textTransform,
		isItalic,
		isOverflown,
		whitespace,
		wordBreak
	};
};

export default useTextResponsiveValues;
