import classNames from 'classnames';

import classes from '@common/classes';
import type { ClassName } from '@common/types';

import {
	DEFAULT_DUMMY_BADGE_IS_COMPACT,
	DEFAULT_DUMMY_BADGE_IS_FULLWIDTH,
	DEFAULT_DUMMY_BADGE_IS_ROUND,
	DEFAULT_DUMMY_BADGE_IS_UPPERCASE,
	DEFAULT_DUMMY_BADGE_LINE_HEIGHT_SIZE,
	DEFAULT_DUMMY_BADGE_SIZE,
	DEFAULT_DUMMY_BADGE_VARIANT
} from '../constants';
import type { DummyBadgeElement, DummyBadgeProps } from '../types';

import useDummyBadgeResponsiveValues from './useDummyBadgeResponsiveValues';
import useDummyBadgeSizeConfig from './useDummyBadgeSizeConfig';

type UseDummyBadgeClassesProps<Element extends DummyBadgeElement> = Pick<
	DummyBadgeProps<Element>,
	'isCompact' | 'isFullWidth' | 'isRound' | 'isUppercase' | 'size' | 'variant'
>;
type UseDummyBadgeClassesReturn = ClassName;

const useDummyBadgeClasses = <Element extends DummyBadgeElement>(
	props: UseDummyBadgeClassesProps<Element>
): UseDummyBadgeClassesReturn => {
	const {
		isCompact: isCompactProp = DEFAULT_DUMMY_BADGE_IS_COMPACT,
		isFullWidth: isFullWidthProp = DEFAULT_DUMMY_BADGE_IS_FULLWIDTH,
		isRound: isRoundProp = DEFAULT_DUMMY_BADGE_IS_ROUND,
		isUppercase: isUppercaseProp = DEFAULT_DUMMY_BADGE_IS_UPPERCASE,
		size: sizeProp = DEFAULT_DUMMY_BADGE_SIZE,
		variant: variantProp = DEFAULT_DUMMY_BADGE_VARIANT
	} = props;

	const { isCompact, isFullWidth, isRound, isUppercase, size, variant } = useDummyBadgeResponsiveValues<Element>({
		isCompact: isCompactProp,
		isFullWidth: isFullWidthProp,
		isRound: isRoundProp,
		isUppercase: isUppercaseProp,
		size: sizeProp,
		variant: variantProp
	});

	const config = useDummyBadgeSizeConfig<Element>({ isCompact, isRound, size, variant });

	return classNames(
		classes.sizing.width[isFullWidth ? 'full' : 'auto'],
		classes.typography.align.center,
		classes.typography.font_size[config.fontSize],
		classes.typography.font_weight.semibold,
		classes.typography.letter_spacing.normal,
		classes.typography.line_height[DEFAULT_DUMMY_BADGE_LINE_HEIGHT_SIZE],
		classes.typography.transform[isUppercase ? 'uppercase' : 'capitalize'],
		classes.typography.text_overflow.ellipsis,
		classes.typography.whiteSpace.nowrap
	);
};

export default useDummyBadgeClasses;
