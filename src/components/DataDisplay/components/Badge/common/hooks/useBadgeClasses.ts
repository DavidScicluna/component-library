import type { ElementType } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetClass, useGetResponsiveValue } from '@common/hooks';
import type { ClassName, PolymorphicDefaultElement, WidthClass } from '@common/types';

import {
	__DEFAULT_BADGE_IS_COMPACT__,
	__DEFAULT_BADGE_IS_FULLWIDTH__,
	__DEFAULT_BADGE_IS_ROUND__,
	__DEFAULT_BADGE_IS_UPPERCASE__,
	__DEFAULT_BADGE_LINE_HEIGHT_SIZE__,
	__DEFAULT_BADGE_SIZE__,
	__DEFAULT_BADGE_VARIANT__
} from '../constants';
import type { BadgeProps } from '../types';

import useBadgeSizeConfig from './useBadgeSizeConfig';

type UseBadgeClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	BadgeProps<Element>,
	'isCompact' | 'isFullWidth' | 'isRound' | 'isUppercase' | 'size' | 'variant'
>;
type UseBadgeClassesReturn = ClassName;

const useBadgeClasses = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseBadgeClassesProps<Element>
): UseBadgeClassesReturn => {
	const {
		isCompact = __DEFAULT_BADGE_IS_COMPACT__,
		isFullWidth = __DEFAULT_BADGE_IS_FULLWIDTH__,
		isRound = __DEFAULT_BADGE_IS_ROUND__,
		isUppercase: uppercase = __DEFAULT_BADGE_IS_UPPERCASE__,
		size = __DEFAULT_BADGE_SIZE__,
		variant = __DEFAULT_BADGE_VARIANT__
	} = props;

	const config = useBadgeSizeConfig<Element>({ isCompact, isRound, size, variant });

	const isUppercase = useGetResponsiveValue<boolean>(uppercase);

	const widthClassName = useGetClass<WidthClass>(isFullWidth ? 'full' : 'auto', ['sizing', 'width']);

	return classNames(
		widthClassName,
		classes.typography.align.center,
		classes.typography.font_size[config.fontSize],
		classes.typography.font_weight.semibold,
		classes.typography.letter_spacing.normal,
		classes.typography.line_height[__DEFAULT_BADGE_LINE_HEIGHT_SIZE__],
		classes.typography.transform[isUppercase ? 'uppercase' : 'capitalize'],
		classes.typography.text_overflow.ellipsis,
		classes.typography.whitespace.nowrap
	);
};

export default useBadgeClasses;
