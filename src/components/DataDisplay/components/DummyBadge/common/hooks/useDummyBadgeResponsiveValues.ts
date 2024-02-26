import { useGetResponsiveValue } from '@common/hooks';

import {
	DEFAULT_DUMMY_BADGE_IS_ANIMATED,
	DEFAULT_DUMMY_BADGE_IS_COMPACT,
	DEFAULT_DUMMY_BADGE_IS_FULLWIDTH,
	DEFAULT_DUMMY_BADGE_IS_OUTLINED,
	DEFAULT_DUMMY_BADGE_IS_ROUND,
	DEFAULT_DUMMY_BADGE_IS_UPPERCASE,
	DEFAULT_DUMMY_BADGE_SIZE,
	DEFAULT_DUMMY_BADGE_VARIANT
} from '../constants';
import type { DummyBadgeElement, DummyBadgeProps, DummyBadgeSize, DummyBadgeVariant } from '../types';

type PickedDummyBadgeProps =
	| 'isAnimated'
	| 'isCompact'
	| 'isFullWidth'
	| 'isOutlined'
	| 'isRound'
	| 'isUppercase'
	| 'size'
	| 'variant';
type UseDummyBadgeResponsiveValuesProps<Element extends DummyBadgeElement> = Partial<
	Pick<DummyBadgeProps<Element>, PickedDummyBadgeProps>
>;

const useDummyBadgeResponsiveValues = <Element extends DummyBadgeElement>(
	props: UseDummyBadgeResponsiveValuesProps<Element>
) => {
	const {
		isAnimated: isAnimatedProp = DEFAULT_DUMMY_BADGE_IS_ANIMATED,
		isCompact: isCompactProp = DEFAULT_DUMMY_BADGE_IS_COMPACT,
		isFullWidth: isFullWidthProp = DEFAULT_DUMMY_BADGE_IS_FULLWIDTH,
		isOutlined: isOutlinedProp = DEFAULT_DUMMY_BADGE_IS_OUTLINED,
		isRound: isRoundProp = DEFAULT_DUMMY_BADGE_IS_ROUND,
		isUppercase: isUppercaseProp = DEFAULT_DUMMY_BADGE_IS_UPPERCASE,
		size: sizeProp = DEFAULT_DUMMY_BADGE_SIZE,
		variant: variantProp = DEFAULT_DUMMY_BADGE_VARIANT
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
