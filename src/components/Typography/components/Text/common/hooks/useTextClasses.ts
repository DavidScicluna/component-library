import classes from '@common/classes';
import { __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, ThemeColor } from '@common/types';
import { checkColorType } from '@common/utils';

import {
	__DEFAULT_TEXT_ALIGN__,
	__DEFAULT_TEXT_FONT_SIZE__,
	__DEFAULT_TEXT_FONT_WEIGHT__,
	__DEFAULT_TEXT_IS_ITALIC__,
	__DEFAULT_TEXT_IS_OVERFLOWN__,
	__DEFAULT_TEXT_LINE_CLAMP__,
	__DEFAULT_TEXT_LINE_HEIGHT__,
	__DEFAULT_TEXT_TRANSFORM__,
	__DEFAULT_TEXT_USER_SELECT__,
	__DEFAULT_TEXT_WHITESPACE__,
	__DEFAULT_TEXT_WORD_BREAK__
} from '../constants';
import type { TextElement, TextProps } from '../types';

import useTextResponsiveValues from './useTextResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseTextClassesProps<Element extends TextElement> = Pick<
	TextProps<Element>,
	| 'color'
	| 'colorMode'
	| 'align'
	| 'fontSize'
	| 'fontWeight'
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
	const { colorMode: __DEFAULT_TEXT_OLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_TEXT_OLORMODE__,
		align: alignProp = __DEFAULT_TEXT_ALIGN__,
		fontSize: fontSizeProp = __DEFAULT_TEXT_FONT_SIZE__,
		fontWeight: fontWeightProp = __DEFAULT_TEXT_FONT_WEIGHT__,
		lineClamp: lineClampProp = __DEFAULT_TEXT_LINE_CLAMP__,
		lineHeight: lineHeightProp = __DEFAULT_TEXT_LINE_HEIGHT__,
		textTransform: textTransformProp = __DEFAULT_TEXT_TRANSFORM__,
		isItalic: isItalicProp = __DEFAULT_TEXT_IS_ITALIC__,
		isOverflown: isOverflownProp = __DEFAULT_TEXT_IS_OVERFLOWN__,
		whiteSpace: whiteSpaceProp = __DEFAULT_TEXT_WHITESPACE__,
		wordBreak: wordBreakProp = __DEFAULT_TEXT_WORD_BREAK__,
		userSelect: userSelectProp = __DEFAULT_TEXT_USER_SELECT__
	} = props;

	const {
		align,
		fontSize,
		fontWeight,
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
		fontSize: fontSizeProp,
		fontWeight: fontWeightProp,
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

	const alignClassName = useGetClass((classes) => classes.typography.align[align]);
	const fontSizeClassName = useGetClass((classes) => classes.typography.font_size[fontSize]);
	const fontWeightClassName = useGetClass((classes) => classes.typography.font_weight[fontWeight] as string);
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
		lineHeightClassName,
		textTransformClassName,
		whiteSpaceClassName,
		wordBreakClassName,
		userSelectClassName,
		{
			[color]: checkColorType(color) === 'class',
			[textColorClassName]: checkColorType(color) === 'theme',
			[lineClampClassName]: !!lineClamp,
			[classes.typography.font_style.italic]: isItalic,
			[classes.typography.font_style['not-italic']]: !isItalic,
			[classes.typography.text_overflow.truncate]: isOverflown
		}
	);
};

export default useTextClasses;
