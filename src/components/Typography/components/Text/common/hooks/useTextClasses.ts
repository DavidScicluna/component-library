import classNames from 'classnames';

import classes from '@common/classes';
import { DEFAULT_COLOR } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, ThemeColor } from '@common/types';
import { checkColorType } from '@common/utils';

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
import type { TextElement, TextProps } from '../types';

import useTextResponsiveValues from './useTextResponsiveValues';

type UseTextClassesProps<Element extends TextElement> = Pick<
	TextProps<Element>,
	| 'color'
	| 'colorMode'
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
>;
type UseTextClassesReturn = ClassName;

const useTextClasses = <Element extends TextElement>(props: UseTextClassesProps<Element>): UseTextClassesReturn => {
	const { colorMode: DEFAULT_TEXT_COLORMODE } = useAppTheme();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_TEXT_COLORMODE,
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

	const {
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
	} = useTextResponsiveValues<Element>({
		align: alignProp,
		decoration: decorationProp,
		fontSize: fontSizeProp,
		fontWeight: fontWeightProp,
		letterSpacing: letterSpacingProp,
		lineClamp: lineClampProp,
		lineHeight: lineHeightProp,
		textTransform: textTransformProp,
		isItalic: isItalicProp,
		isOverflown: isOverflownProp,
		whiteSpace: whiteSpaceProp,
		wordBreak: wordBreakProp,
		userSelect: userSelectProp
	});

	const textColorClassName = useGetColor({
		color: checkColorType(color) === 'theme' ? (color as ThemeColor) : undefined,
		colorMode,
		colorType: color ? 'color' : 'default',
		classType: 'border',
		hueType: 'text.primary'
	});

	const decorationColorClassName = useGetColor({
		color: checkColorType(decoration.color) === 'theme' ? (color as ThemeColor) : undefined,
		colorMode,
		colorType: decoration.color ? 'color' : 'default',
		classType: 'border',
		hueType: 'text.primary'
	});

	const alignClassName = useGetClass((classes) => classes.typography.align[align]);
	const decorationClassName = useGetClass((classes) => classes.typography.text_decoration[decoration.variant]);
	const decorationStyleClassName = useGetClass(
		(classes) => classes.typography.text_decoration_style[decoration.style]
	);
	const decorationThicknessClassName = useGetClass(
		(classes) => classes.typography.text_decoration_thickness[decoration.thickness]
	);
	const decorationOffsetClassName = useGetClass(
		(classes) => classes.typography.text_underline_offset[decoration.offset]
	);
	const fontSizeClassName = useGetClass((classes) => classes.typography.font_size[fontSize]);
	const fontWeightClassName = useGetClass((classes) => classes.typography.font_weight[fontWeight] as string);
	const letterSpacingClassName = useGetClass((classes) => classes.typography.letter_spacing[letterSpacing]);
	const lineClampClassName = useGetClass((classes) => classes.typography.line_clamp[lineClamp]);
	const lineHeightClassName = useGetClass((classes) => classes.typography.line_height[lineHeight] as string);
	const textTransformClassName = useGetClass((classes) => classes.typography.transform[textTransform]);
	const whiteSpaceClassName = useGetClass((classes) => classes.typography.whiteSpace[whiteSpace]);
	const wordBreakClassName = useGetClass((classes) => classes.typography.word_break[wordBreak]);
	const userSelectClassName = useGetClass((classes) => classes.interactivity.user_select[userSelect]);

	return classNames(
		alignClassName,
		fontSizeClassName,
		fontWeightClassName,
		letterSpacingClassName,
		lineClampClassName,
		lineHeightClassName,
		textTransformClassName,
		whiteSpaceClassName,
		wordBreakClassName,
		userSelectClassName,
		{
			[color]: checkColorType(color) === 'class',
			[textColorClassName]: checkColorType(color) === 'theme',
			[decorationClassName]: !!decoration,
			[decoration.color]: !!decoration && checkColorType(decoration.color) === 'class',
			[decorationColorClassName]: !!decoration && checkColorType(decoration.color) === 'theme',
			[decorationStyleClassName]: !!decoration,
			[decorationThicknessClassName]: !!decoration,
			[decorationOffsetClassName]: !!decoration,
			[classes.typography.font_style.italic]: isItalic,
			[classes.typography.font_style['not-italic']]: !isItalic,
			[classes.typography.text_overflow.truncate]: isOverflown
		}
	);
};

export default useTextClasses;
