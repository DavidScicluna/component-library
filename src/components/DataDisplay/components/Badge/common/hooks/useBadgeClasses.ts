import classNames from 'classnames';

import classes from '@common/classes';
import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';

import {
	DEFAULT_BADGE_IS_COMPACT,
	DEFAULT_BADGE_IS_FULLWIDTH,
	DEFAULT_BADGE_IS_ROUND,
	DEFAULT_BADGE_IS_UPPERCASE,
	DEFAULT_BADGE_LINE_HEIGHT_SIZE,
	DEFAULT_BADGE_SIZE,
	DEFAULT_BADGE_VARIANT
} from '../constants';
import type { BadgeUniqueProps } from '../types';

import useBadgeResponsiveValues from './useBadgeResponsiveValues';
import useBadgeSizeConfig from './useBadgeSizeConfig';

type PickedBadgeUniqueProps = 'isCompact' | 'isFullWidth' | 'isRound' | 'isUppercase' | 'size' | 'variant';
type UseBadgeClassesProps = Pick<BadgeUniqueProps, PickedBadgeUniqueProps>;
type UseBadgeClassesReturn = ClassName;

const useBadgeClasses = (props: UseBadgeClassesProps): UseBadgeClassesReturn => {
	const {
		isCompact: isCompactProp = DEFAULT_BADGE_IS_COMPACT,
		isFullWidth: isFullWidthProp = DEFAULT_BADGE_IS_FULLWIDTH,
		isRound: isRoundProp = DEFAULT_BADGE_IS_ROUND,
		isUppercase: isUppercaseProp = DEFAULT_BADGE_IS_UPPERCASE,
		size: sizeProp = DEFAULT_BADGE_SIZE,
		variant: variantProp = DEFAULT_BADGE_VARIANT
	} = props;

	const { isCompact, isFullWidth, isRound, isUppercase, size, variant } = useBadgeResponsiveValues({
		isCompact: isCompactProp,
		isFullWidth: isFullWidthProp,
		isRound: isRoundProp,
		isUppercase: isUppercaseProp,
		size: sizeProp,
		variant: variantProp
	});

	const config = useBadgeSizeConfig({ isCompact, isRound, size, variant });

	const widthClassName = useGetClass((classes) => classes.sizing.width[isFullWidth ? 'full' : 'auto']);

	return classNames(
		widthClassName,
		classes.typography.align.center,
		classes.typography.font_size[config.fontSize],
		classes.typography.font_weight.semibold,
		classes.typography.letter_spacing.normal,
		classes.typography.line_height[DEFAULT_BADGE_LINE_HEIGHT_SIZE],
		classes.typography.transform[isUppercase ? 'uppercase' : 'capitalize'],
		classes.typography.text_overflow.ellipsis,
		classes.typography.whiteSpace.nowrap
	);
};

export default useBadgeClasses;
