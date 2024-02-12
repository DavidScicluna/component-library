import classes from '@common/classes';
import type { ClassName } from '@common/types';

import {
	__DEFAULT_DUMMY_BADGE_IS_COMPACT__,
	__DEFAULT_DUMMY_BADGE_IS_FULLWIDTH__,
	__DEFAULT_DUMMY_BADGE_IS_ROUND__,
	__DEFAULT_DUMMY_BADGE_IS_UPPERCASE__,
	__DEFAULT_DUMMY_BADGE_LINE_HEIGHT_SIZE__,
	__DEFAULT_DUMMY_BADGE_SIZE__,
	__DEFAULT_DUMMY_BADGE_VARIANT__
} from '../constants';
import type { DummyBadgeElement, DummyBadgeProps } from '../types';

import useDummyBadgeResponsiveValues from './useDummyBadgeResponsiveValues';
import useDummyBadgeSizeConfig from './useDummyBadgeSizeConfig';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseDummyBadgeClassesProps<Element extends DummyBadgeElement> = Pick<
	DummyBadgeProps<Element>,
	'isCompact' | 'isFullWidth' | 'isRound' | 'isUppercase' | 'size' | 'variant'
>;
type UseDummyBadgeClassesReturn = ClassName;

const useDummyBadgeClasses = <Element extends DummyBadgeElement>(
	props: UseDummyBadgeClassesProps<Element>
): UseDummyBadgeClassesReturn => {
	const {
		isCompact: isCompactProp = __DEFAULT_DUMMY_BADGE_IS_COMPACT__,
		isFullWidth: isFullWidthProp = __DEFAULT_DUMMY_BADGE_IS_FULLWIDTH__,
		isRound: isRoundProp = __DEFAULT_DUMMY_BADGE_IS_ROUND__,
		isUppercase: isUppercaseProp = __DEFAULT_DUMMY_BADGE_IS_UPPERCASE__,
		size: sizeProp = __DEFAULT_DUMMY_BADGE_SIZE__,
		variant: variantProp = __DEFAULT_DUMMY_BADGE_VARIANT__
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
		classes.typography.line_height[__DEFAULT_DUMMY_BADGE_LINE_HEIGHT_SIZE__],
		classes.typography.transform[isUppercase ? 'uppercase' : 'capitalize'],
		classes.typography.text_overflow.ellipsis,
		classes.typography.whiteSpace.nowrap
	);
};

export default useDummyBadgeClasses;
