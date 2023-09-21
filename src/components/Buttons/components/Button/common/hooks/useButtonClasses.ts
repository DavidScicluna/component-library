import classNames from 'classnames';

import classes from '@common/classes';
import { useGetClass } from '@common/hooks';
import type { ClassName, WidthClass } from '@common/types';

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

	return classNames(
		widthClassName,
		classes.typography.align.center,
		classes.typography.font_size[config.fontSize],
		classes.typography.font_weight.semibold,
		classes.typography.letter_spacing.normal,
		classes.typography.line_height[__DEFAULT_BUTTON_LINE_HEIGHT_SIZE__],
		classes.typography.transform.uppercase,
		classes.typography.text_overflow.ellipsis,
		classes.typography.whitespace.nowrap
	);
};

export default useButtonClasses;
