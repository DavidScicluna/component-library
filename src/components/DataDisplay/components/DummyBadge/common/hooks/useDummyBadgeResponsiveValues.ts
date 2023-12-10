import { useGetResponsiveValue } from '@common/hooks';

import {
	__DEFAULT_DUMMY_BADGE_IS_ANIMATED__,
	__DEFAULT_DUMMY_BADGE_IS_COMPACT__,
	__DEFAULT_DUMMY_BADGE_IS_FULLWIDTH__,
	__DEFAULT_DUMMY_BADGE_IS_OUTLINED__,
	__DEFAULT_DUMMY_BADGE_IS_ROUND__,
	__DEFAULT_DUMMY_BADGE_IS_UPPERCASE__,
	__DEFAULT_DUMMY_BADGE_SIZE__,
	__DEFAULT_DUMMY_BADGE_VARIANT__
} from '../constants';
import type { DummyBadgeProps, DummyBadgeSize, DummyBadgeVariant } from '../types';

type UseDummyBadgeResponsiveValuesProps = Pick<
	DummyBadgeProps,
	'isAnimated' | 'isCompact' | 'isFullWidth' | 'isOutlined' | 'isRound' | 'isUppercase' | 'size' | 'variant'
>;

const useDummyBadgeResponsiveValues = (props: UseDummyBadgeResponsiveValuesProps) => {
	const {
		isAnimated: isAnimatedProp = __DEFAULT_DUMMY_BADGE_IS_ANIMATED__,
		isCompact: isCompactProp = __DEFAULT_DUMMY_BADGE_IS_COMPACT__,
		isFullWidth: isFullWidthProp = __DEFAULT_DUMMY_BADGE_IS_FULLWIDTH__,
		isOutlined: isOutlinedProp = __DEFAULT_DUMMY_BADGE_IS_OUTLINED__,
		isRound: isRoundProp = __DEFAULT_DUMMY_BADGE_IS_ROUND__,
		isUppercase: isUppercaseProp = __DEFAULT_DUMMY_BADGE_IS_UPPERCASE__,
		size: sizeProp = __DEFAULT_DUMMY_BADGE_SIZE__,
		variant: variantProp = __DEFAULT_DUMMY_BADGE_VARIANT__
	} = props;

	const isAnimated = useGetResponsiveValue<boolean>(isAnimatedProp);
	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isFullWidth = useGetResponsiveValue<boolean>(isFullWidthProp);
	const isOutlined = useGetResponsiveValue<boolean>(isOutlinedProp);
	const isRound = useGetResponsiveValue<boolean>(isRoundProp);
	const isUppercase = useGetResponsiveValue<boolean>(isUppercaseProp);

	const size = useGetResponsiveValue<DummyBadgeSize>(sizeProp);
	const variant = useGetResponsiveValue<DummyBadgeVariant>(variantProp);

	return {
		isAnimated,
		isCompact,
		isFullWidth,
		isOutlined,
		isRound,
		isUppercase,
		size,
		variant
	};
};

export default useDummyBadgeResponsiveValues;
