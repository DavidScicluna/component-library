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
	TextOverflowClass
} from '@common/types/classes';

import {
	__DEFAULT_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_ICON_BUTTON_IS_ROUND__,
	__DEFAULT_ICON_BUTTON_LINE_HEIGHT_SIZE__,
	__DEFAULT_ICON_BUTTON_SIZE__,
	__DEFAULT_ICON_BUTTON_VARIANT__
} from '../constants';
import type { IconButtonDefaultElement, IconButtonElement, IconButtonProps } from '../types';

import useIconButtonSizeConfig from './useIconButtonSizeConfig';

type UseIconButtonClassesProps<Element extends IconButtonElement = IconButtonDefaultElement> = Pick<
	IconButtonProps<Element>,
	'isCompact' | 'isRound' | 'size' | 'variant'
>;
type UseIconButtonClassesReturn = ClassName;

const useIconButtonClasses = <Element extends IconButtonElement = IconButtonDefaultElement>(
	props: UseIconButtonClassesProps<Element>
): UseIconButtonClassesReturn => {
	const {
		isCompact = __DEFAULT_ICON_BUTTON_IS_COMPACT__,
		isRound = __DEFAULT_ICON_BUTTON_IS_ROUND__,
		size = __DEFAULT_ICON_BUTTON_SIZE__,
		variant = __DEFAULT_ICON_BUTTON_VARIANT__
	} = props;

	const config = useIconButtonSizeConfig<Element>({ isCompact, isRound, size, variant });

	const alignClassName = useGetClass<TextAlignClass>('center', ['typography', 'align']);
	const fontSizeClassName = useGetClass<ThemeFontSize>(config.fontSize, ['typography', 'font_size']);
	const fontWeightClassName = useGetClass<ThemeFontWeight>('semibold', ['typography', 'font_weight']);
	const letterSpacingClassName = useGetClass<TextLetterSpacingClass>('normal', ['typography', 'letter_spacing']);
	const lineHeightClassName = useGetClass<ThemeLineHeight>(__DEFAULT_ICON_BUTTON_LINE_HEIGHT_SIZE__, [
		'typography',
		'line_height'
	]);
	const textTransformClassName = useGetClass<TextTransformClass>('uppercase', ['typography', 'transform']);
	const textOverflowClassName = useGetClass<TextOverflowClass>('ellipsis', ['typography', 'text_overflow']);
	const whitespaceClassName = useGetClass<WhitespaceClass>('nowrap', ['typography', 'whitespace']);

	// const outlineWidthClassName = useGetClass<OutlineWidthClass>(0, ['borders', 'outline_width']);
	// const outlineStyleClassName = useGetClass<OutlineStyleClass>('none', ['borders', 'outline_style']);

	return classNames(
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

export default useIconButtonClasses;
