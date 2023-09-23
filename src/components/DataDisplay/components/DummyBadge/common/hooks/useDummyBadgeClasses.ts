import type { ElementType } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetClass, useGetResponsiveValue } from '@common/hooks';
import type { ClassName, WidthClass } from '@common/types';

import {
	__DEFAULT_DUMMY_BADGE_IS_COMPACT__,
	__DEFAULT_DUMMY_BADGE_IS_FULLWIDTH__,
	__DEFAULT_DUMMY_BADGE_IS_ROUND__,
	__DEFAULT_DUMMY_BADGE_IS_UPPERCASE__,
	__DEFAULT_DUMMY_BADGE_LINE_HEIGHT_SIZE__,
	__DEFAULT_DUMMY_BADGE_SIZE__,
	__DEFAULT_DUMMY_BADGE_VARIANT__
} from '../constants';
import type { DummyBadgeProps } from '../types';

import useDummyBadgeSizeConfig from './useDummyBadgeSizeConfig';

type UseDummyBadgeClassesProps<Element extends ElementType> = Pick<
	DummyBadgeProps<Element>,
	'isCompact' | 'isFullWidth' | 'isRound' | 'isUppercase' | 'size' | 'variant'
>;
type UseDummyBadgeClassesReturn = ClassName;

const useDummyBadgeClasses = <Element extends ElementType>(
	props: UseDummyBadgeClassesProps<Element>
): UseDummyBadgeClassesReturn => {
	const {
		isCompact = __DEFAULT_DUMMY_BADGE_IS_COMPACT__,
		isFullWidth = __DEFAULT_DUMMY_BADGE_IS_FULLWIDTH__,
		isRound = __DEFAULT_DUMMY_BADGE_IS_ROUND__,
		isUppercase: uppercase = __DEFAULT_DUMMY_BADGE_IS_UPPERCASE__,
		size = __DEFAULT_DUMMY_BADGE_SIZE__,
		variant = __DEFAULT_DUMMY_BADGE_VARIANT__
	} = props;

	const config = useDummyBadgeSizeConfig<Element>({ isCompact, isRound, size, variant });

	const isUppercase = useGetResponsiveValue<boolean>(uppercase);

	const widthClassName = useGetClass<WidthClass>(isFullWidth ? 'full' : 'auto', ['sizing', 'width']);

	return classNames(
		widthClassName,
		classes.typography.align.center,
		classes.typography.font_size[config.fontSize],
		classes.typography.font_weight.semibold,
		classes.typography.letter_spacing.normal,
		classes.typography.line_height[__DEFAULT_DUMMY_BADGE_LINE_HEIGHT_SIZE__],
		classes.typography.transform[isUppercase ? 'uppercase' : 'capitalize'],
		classes.typography.text_overflow.ellipsis,
		classes.typography.whitespace.nowrap
	);
};

export default useDummyBadgeClasses;
