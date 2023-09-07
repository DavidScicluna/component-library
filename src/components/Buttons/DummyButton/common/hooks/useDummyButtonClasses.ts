import type { ElementType } from 'react';

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
	__DEFAULT_DUMMY_BUTTON_IS_COMPACT__,
	__DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_DUMMY_BUTTON_IS_ROUND__,
	__DEFAULT_DUMMY_BUTTON_LINE_HEIGHT_SIZE__,
	__DEFAULT_DUMMY_BUTTON_SIZE__,
	__DEFAULT_DUMMY_BUTTON_VARIANT__
} from '../constants';
import type { DummyButtonProps } from '../types';

import useDummyButtonSizeConfig from './useDummyButtonSizeConfig';

type UseDummyButtonClassesProps<Element extends ElementType> = Pick<
	DummyButtonProps<Element>,
	'isAnimated' | 'isCompact' | 'isFullWidth' | 'isRound' | 'size' | 'variant'
>;
type UseDummyButtonClassesReturn = ClassName;

const useDummyButtonClasses = <Element extends ElementType>(
	props: UseDummyButtonClassesProps<Element>
): UseDummyButtonClassesReturn => {
	const {
		isCompact = __DEFAULT_DUMMY_BUTTON_IS_COMPACT__,
		isFullWidth = __DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH__,
		isRound = __DEFAULT_DUMMY_BUTTON_IS_ROUND__,
		size = __DEFAULT_DUMMY_BUTTON_SIZE__,
		variant = __DEFAULT_DUMMY_BUTTON_VARIANT__
	} = props;

	const config = useDummyButtonSizeConfig<Element>({ isCompact, isRound, size, variant });

	const widthClassName = useGetClass<WidthClass>(isFullWidth ? 'full' : 'auto', ['sizing', 'width']);

	const alignClassName = useGetClass<TextAlignClass>('center', ['typography', 'align']);
	const fontSizeClassName = useGetClass<ThemeFontSize>(config.fontSize, ['typography', 'font_size']);
	const fontWeightClassName = useGetClass<ThemeFontWeight>('semibold', ['typography', 'font_weight']);
	const letterSpacingClassName = useGetClass<TextLetterSpacingClass>('normal', ['typography', 'letter_spacing']);
	const lineHeightClassName = useGetClass<ThemeLineHeight>(__DEFAULT_DUMMY_BUTTON_LINE_HEIGHT_SIZE__, [
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

export default useDummyButtonClasses;
