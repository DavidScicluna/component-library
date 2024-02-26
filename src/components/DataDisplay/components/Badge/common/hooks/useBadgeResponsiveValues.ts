import { useGetResponsiveValue } from '@common/hooks';

import {
	DEFAULT_BADGE_IS_ACTIVE,
	DEFAULT_BADGE_IS_CLICKABLE,
	DEFAULT_BADGE_IS_COMPACT,
	DEFAULT_BADGE_IS_DISABLED,
	DEFAULT_BADGE_IS_FULLWIDTH,
	DEFAULT_BADGE_IS_OUTLINED,
	DEFAULT_BADGE_IS_ROUND,
	DEFAULT_BADGE_IS_UPPERCASE,
	DEFAULT_BADGE_SIZE,
	DEFAULT_BADGE_VARIANT
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
		isActive: isActiveProp = DEFAULT_BADGE_IS_ACTIVE,
		isClickable: isClickableProp = DEFAULT_BADGE_IS_CLICKABLE,
		isCompact: isCompactProp = DEFAULT_BADGE_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_BADGE_IS_DISABLED,
		isFullWidth: isFullWidthProp = DEFAULT_BADGE_IS_FULLWIDTH,
		isOutlined: isOutlinedProp = DEFAULT_BADGE_IS_OUTLINED,
		isRound: isRoundProp = DEFAULT_BADGE_IS_ROUND,
		isUppercase: isUppercaseProp = DEFAULT_BADGE_IS_UPPERCASE,
		size: sizeProp = DEFAULT_BADGE_SIZE,
		variant: variantProp = DEFAULT_BADGE_VARIANT
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
