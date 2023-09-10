import type { ElementType } from 'react';

import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type {
	ClassName,
	TextAlignClass,
	// OutlineStyleClass,
	// OutlineWidthClass,
	TextLetterSpacingClass,
	TextOverflowClass,
	TextTransformClass,
	ThemeFontSize,
	ThemeFontWeight,
	ThemeLineHeight,
	WhitespaceClass,
	WidthClass
} from '@common/types';

import {
	__DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND__,
	__DEFAULT_DUMMY_ICON_BUTTON_LINE_HEIGHT_SIZE__,
	__DEFAULT_DUMMY_ICON_BUTTON_SIZE__,
	__DEFAULT_DUMMY_ICON_BUTTON_VARIANT__
} from '../constants';
import type { DummyIconButtonProps } from '../types';

import useDummyIconButtonSizeConfig from './useDummyIconButtonSizeConfig';

type UseDummyIconButtonClassesProps<Element extends ElementType> = Pick<
	DummyIconButtonProps<Element>,
	'isAnimated' | 'isCompact' | 'isRound' | 'size' | 'variant'
>;
type UseDummyIconButtonClassesReturn = ClassName;

const useDummyIconButtonClasses = <Element extends ElementType>(
	props: UseDummyIconButtonClassesProps<Element>
): UseDummyIconButtonClassesReturn => {
	const {
		isCompact = __DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT__,
		isRound = __DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND__,
		size = __DEFAULT_DUMMY_ICON_BUTTON_SIZE__,
		variant = __DEFAULT_DUMMY_ICON_BUTTON_VARIANT__
	} = props;

	const config = useDummyIconButtonSizeConfig<Element>({ isCompact, isRound, size, variant });

	const widthClassName = useGetClass<WidthClass>('auto', ['sizing', 'width']);

	const alignClassName = useGetClass<TextAlignClass>('center', ['typography', 'align']);
	const fontSizeClassName = useGetClass<ThemeFontSize>(config.fontSize, ['typography', 'font_size']);
	const fontWeightClassName = useGetClass<ThemeFontWeight>('semibold', ['typography', 'font_weight']);
	const letterSpacingClassName = useGetClass<TextLetterSpacingClass>('normal', ['typography', 'letter_spacing']);
	const lineHeightClassName = useGetClass<ThemeLineHeight>(__DEFAULT_DUMMY_ICON_BUTTON_LINE_HEIGHT_SIZE__, [
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

export default useDummyIconButtonClasses;
