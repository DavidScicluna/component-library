import type { ElementType } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetClass, useGetResponsiveValue } from '@common/hooks';
import type { ClassName, PolymorphicDefaultElement, WidthClass } from '@common/types';

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

type UseDummyButtonClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	DummyButtonProps<Element>,
	'isAnimated' | 'isCompact' | 'isFullWidth' | 'isRound' | 'size' | 'variant'
>;
type UseDummyButtonClassesReturn = ClassName;

const useDummyButtonClasses = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseDummyButtonClassesProps<Element>
): UseDummyButtonClassesReturn => {
	const {
		isCompact: compact = __DEFAULT_DUMMY_BUTTON_IS_COMPACT__,
		isFullWidth: fullWidth = __DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH__,
		isRound: round = __DEFAULT_DUMMY_BUTTON_IS_ROUND__,
		size = __DEFAULT_DUMMY_BUTTON_SIZE__,
		variant = __DEFAULT_DUMMY_BUTTON_VARIANT__
	} = props;

	const isCompact = useGetResponsiveValue<boolean>(compact);
	const isFullWidth = useGetResponsiveValue<boolean>(fullWidth);
	const isRound = useGetResponsiveValue<boolean>(round);

	const config = useDummyButtonSizeConfig<Element>({ isCompact, isRound, size, variant });

	const widthClassName = useGetClass<WidthClass>(isFullWidth ? 'full' : 'auto', ['sizing', 'width']);

	return classNames(widthClassName, {
		[classes.typography.align.center]: variant !== 'unstyled',
		[classes.typography.font_size[config.fontSize]]: variant !== 'unstyled',
		[classes.typography.font_weight.semibold]: variant !== 'unstyled',
		[classes.typography.letter_spacing.normal]: variant !== 'unstyled',
		[classes.typography.line_height[__DEFAULT_DUMMY_BUTTON_LINE_HEIGHT_SIZE__]]: variant !== 'unstyled',
		[classes.typography.transform.uppercase]: variant !== 'unstyled',
		[classes.typography.text_overflow.ellipsis]: variant !== 'unstyled',
		[classes.typography.whitespace.nowrap]: variant !== 'unstyled'
	});
};

export default useDummyButtonClasses;
