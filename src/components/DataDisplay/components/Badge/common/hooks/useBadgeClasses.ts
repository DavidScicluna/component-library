import classNames from 'classnames';

import classes from '@common/classes';
import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';

import {
	__DEFAULT_BADGE_IS_COMPACT__,
	__DEFAULT_BADGE_IS_FULLWIDTH__,
	__DEFAULT_BADGE_IS_ROUND__,
	__DEFAULT_BADGE_IS_UPPERCASE__,
	__DEFAULT_BADGE_LINE_HEIGHT_SIZE__,
	__DEFAULT_BADGE_SIZE__,
	__DEFAULT_BADGE_VARIANT__
} from '../constants';
import type { BadgeElement, BadgeProps } from '../types';

import useBadgeResponsiveValues from './useBadgeResponsiveValues';
import useBadgeSizeConfig from './useBadgeSizeConfig';

type UseBadgeClassesProps<Element extends BadgeElement> = Pick<
	BadgeProps<Element>,
	'isCompact' | 'isFullWidth' | 'isRound' | 'isUppercase' | 'size' | 'variant'
>;
type UseBadgeClassesReturn = ClassName;

const useBadgeClasses = <Element extends BadgeElement>(props: UseBadgeClassesProps<Element>): UseBadgeClassesReturn => {
	const {
		isCompact: isCompactProp = __DEFAULT_BADGE_IS_COMPACT__,
		isFullWidth: isFullWidthProp = __DEFAULT_BADGE_IS_FULLWIDTH__,
		isRound: isRoundProp = __DEFAULT_BADGE_IS_ROUND__,
		isUppercase: isUppercaseProp = __DEFAULT_BADGE_IS_UPPERCASE__,
		size: sizeProp = __DEFAULT_BADGE_SIZE__,
		variant: variantProp = __DEFAULT_BADGE_VARIANT__
	} = props;

	const { isCompact, isFullWidth, isRound, isUppercase, size, variant } = useBadgeResponsiveValues<Element>({
		isCompact: isCompactProp,
		isFullWidth: isFullWidthProp,
		isRound: isRoundProp,
		isUppercase: isUppercaseProp,
		size: sizeProp,
		variant: variantProp
	});

	const config = useBadgeSizeConfig<Element>({ isCompact, isRound, size, variant });

	const widthClassName = useGetClass((classes) => classes.sizing.width[isFullWidth ? 'full' : 'auto']);

	return classNames(
		widthClassName,
		classes.typography.align.center,
		classes.typography.font_size[config.fontSize],
		classes.typography.font_weight.semibold,
		classes.typography.letter_spacing.normal,
		classes.typography.line_height[__DEFAULT_BADGE_LINE_HEIGHT_SIZE__],
		classes.typography.transform[isUppercase ? 'uppercase' : 'capitalize'],
		classes.typography.text_overflow.ellipsis,
		classes.typography.whiteSpace.nowrap
	);
};

export default useBadgeClasses;
