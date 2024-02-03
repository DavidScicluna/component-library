import { useGetResponsiveValue } from '@common/hooks';

import {
	__DEFAULT_BADGE_IS_ACTIVE__,
	__DEFAULT_BADGE_IS_CLICKABLE__,
	__DEFAULT_BADGE_IS_COMPACT__,
	__DEFAULT_BADGE_IS_DISABLED__,
	__DEFAULT_BADGE_IS_FULLWIDTH__,
	__DEFAULT_BADGE_IS_OUTLINED__,
	__DEFAULT_BADGE_IS_ROUND__,
	__DEFAULT_BADGE_IS_UPPERCASE__,
	__DEFAULT_BADGE_SIZE__,
	__DEFAULT_BADGE_VARIANT__
} from '../constants';
import type { BadgeElement, BadgeProps, BadgeSize, BadgeVariant } from '../types';

type PickedBadgeProps =
	| 'isActive'
	| 'isClickable'
	| 'isCompact'
	| 'isDisabled'
	| 'isFullWidth'
	| 'isOutlined'
	| 'isRound'
	| 'isUppercase'
	| 'size'
	| 'variant';
type UseBadgeResponsiveValuesProps<Element extends BadgeElement> = Partial<Pick<BadgeProps<Element>, PickedBadgeProps>>;

const useBadgeResponsiveValues = <Element extends BadgeElement>(props: UseBadgeResponsiveValuesProps<Element>) => {
	const {
		isActive: isActiveProp = __DEFAULT_BADGE_IS_ACTIVE__,
		isClickable: isClickableProp = __DEFAULT_BADGE_IS_CLICKABLE__,
		isCompact: isCompactProp = __DEFAULT_BADGE_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_BADGE_IS_DISABLED__,
		isFullWidth: isFullWidthProp = __DEFAULT_BADGE_IS_FULLWIDTH__,
		isOutlined: isOutlinedProp = __DEFAULT_BADGE_IS_OUTLINED__,
		isRound: isRoundProp = __DEFAULT_BADGE_IS_ROUND__,
		isUppercase: isUppercaseProp = __DEFAULT_BADGE_IS_UPPERCASE__,
		size: sizeProp = __DEFAULT_BADGE_SIZE__,
		variant: variantProp = __DEFAULT_BADGE_VARIANT__
	} = props;

	const isActive = useGetResponsiveValue<boolean>(isActiveProp);
	const isClickable = useGetResponsiveValue<boolean>(isClickableProp);
	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isFullWidth = useGetResponsiveValue<boolean>(isFullWidthProp);
	const isOutlined = useGetResponsiveValue<boolean>(isOutlinedProp);
	const isRound = useGetResponsiveValue<boolean>(isRoundProp);
	const isUppercase = useGetResponsiveValue<boolean>(isUppercaseProp);

	const size = useGetResponsiveValue<BadgeSize>(sizeProp);
	const variant = useGetResponsiveValue<BadgeVariant>(variantProp);

	return {
		isActive,
		isClickable,
		isCompact,
		isDisabled,
		isFullWidth,
		isOutlined,
		isRound,
		isUppercase,
		size,
		variant
	};
};

export default useBadgeResponsiveValues;
