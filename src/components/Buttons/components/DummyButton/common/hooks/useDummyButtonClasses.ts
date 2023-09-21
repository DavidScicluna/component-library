import type { ElementType } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetClass } from '@common/hooks';
import type { ClassName, WidthClass } from '@common/types';

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

	return classNames(
		widthClassName,
		classes.typography.align.center,
		classes.typography.font_size[config.fontSize],
		classes.typography.font_weight.semibold,
		classes.typography.letter_spacing.normal,
		classes.typography.line_height[__DEFAULT_DUMMY_BUTTON_LINE_HEIGHT_SIZE__],
		classes.typography.transform.uppercase,
		classes.typography.text_overflow.ellipsis,
		classes.typography.whitespace.nowrap
	);
};

export default useDummyButtonClasses;
