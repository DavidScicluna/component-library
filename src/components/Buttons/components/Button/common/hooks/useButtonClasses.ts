import classNames from 'classnames';

import classes from '@common/classes';
import { useGetClass, useGetResponsiveValue } from '@common/hooks';
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
		isCompact: compact = __DEFAULT_BUTTON_IS_COMPACT__,
		isFullWidth: fullWidth = __DEFAULT_BUTTON_IS_FULLWIDTH__,
		isRound: round = __DEFAULT_BUTTON_IS_ROUND__,
		size = __DEFAULT_BUTTON_SIZE__,
		variant = __DEFAULT_BUTTON_VARIANT__
	} = props;

	const isCompact = useGetResponsiveValue<boolean>(compact);
	const isFullWidth = useGetResponsiveValue<boolean>(fullWidth);
	const isRound = useGetResponsiveValue<boolean>(round);

	const config = useButtonSizeConfig<Element>({ isCompact, isRound, size, variant });

	const widthClassName = useGetClass<WidthClass>(isFullWidth ? 'full' : 'auto', ['sizing', 'width']);

	return classNames(widthClassName, {
		[classes.typography.align.center]: variant !== 'unstyled',
		[classes.typography.font_size[config.fontSize]]: variant !== 'unstyled',
		[classes.typography.font_weight.semibold]: variant !== 'unstyled',
		[classes.typography.letter_spacing.normal]: variant !== 'unstyled',
		[classes.typography.line_height[__DEFAULT_BUTTON_LINE_HEIGHT_SIZE__]]: variant !== 'unstyled',
		[classes.typography.transform.uppercase]: variant !== 'unstyled',
		[classes.typography.text_overflow.ellipsis]: variant !== 'unstyled',
		[classes.typography.whitespace.nowrap]: variant !== 'unstyled'
	});
};

export default useButtonClasses;
