import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type {
	ClassName,
	TextAlignClass,
	TextTransformClass,
	ThemeFontSize,
	ThemeFontWeight,
	ThemeLineHeight,
	WhitespaceClass
} from '@common/types';
import type {
	// OutlineStyleClass,
	// OutlineWidthClass,
	TextLetterSpacingClass,
	TextOverflowClass,
	WidthClass
} from '@common/types/classes';

import {
	__DEFAULT_BUTTON_IS_COMPACT__,
	__DEFAULT_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_BUTTON_IS_ROUND__,
	__DEFAULT_BUTTON_LINE_HEIGHT_SIZE__,
	__DEFAULT_BUTTON_SIZE__,
	__DEFAULT_BUTTON_VARIANT__
} from '../constants';
import type { ButtonDefaultElement, ButtonElement, ButtonProps } from '../types';

import useButtonSizeConfig from './useButtonSizeConfig';

type UseButtonClassesProps<Element extends ButtonElement = ButtonDefaultElement> = Pick<
	ButtonProps<Element>,
	'isCompact' | 'isFullWidth' | 'isRound' | 'size' | 'variant'
>;
type UseButtonClassesReturn = ClassName;

const useButtonClasses = <Element extends ButtonElement = ButtonDefaultElement>(
	props: UseButtonClassesProps<Element>
): UseButtonClassesReturn => {
	const {
		isCompact = __DEFAULT_BUTTON_IS_COMPACT__,
		isFullWidth = __DEFAULT_BUTTON_IS_FULLWIDTH__,
		isRound = __DEFAULT_BUTTON_IS_ROUND__,
		size = __DEFAULT_BUTTON_SIZE__,
		variant = __DEFAULT_BUTTON_VARIANT__
	} = props;

	const config = useButtonSizeConfig<Element>({ isCompact, isRound, size, variant });

	const widthClassName = useGetClass<WidthClass>(isFullWidth ? 'full' : 'auto', ['sizing', 'width']);

	const alignClassName = useGetClass<TextAlignClass>('center', ['typography', 'align']);
	const fontSizeClassName = useGetClass<ThemeFontSize>(config.fontSize, ['typography', 'font_size']);
	const fontWeightClassName = useGetClass<ThemeFontWeight>('semibold', ['typography', 'font_weight']);
	const letterSpacingClassName = useGetClass<TextLetterSpacingClass>('normal', ['typography', 'letter_spacing']);
	const lineHeightClassName = useGetClass<ThemeLineHeight>(__DEFAULT_BUTTON_LINE_HEIGHT_SIZE__, [
		'typography',
		'line_height'
	]);
	const textTransformClassName = useGetClass<TextTransformClass>('uppercase', ['typography', 'transform']);
	const textOverflowClassName = useGetClass<TextOverflowClass>('ellipsis', ['typography', 'text_overflow']);
	const whitespaceClassName = useGetClass<WhitespaceClass>('nowrap', ['typography', 'whitespace']);

	// const outlineWidthClassName = useGetClass<OutlineWidthClass>(0, ['borders', 'outline_width']);
	// const outlineStyleClassName = useGetClass<OutlineStyleClass>('none', ['borders', 'outline_style']);

	return classNames(
		widthClassName,
		alignClassName,
		fontSizeClassName,
		fontWeightClassName,
		letterSpacingClassName,
		lineHeightClassName,
		textTransformClassName,
		textOverflowClassName,
		whitespaceClassName
		// outlineWidthClassName,
		// outlineStyleClassName
	);
};

export default useButtonClasses;
