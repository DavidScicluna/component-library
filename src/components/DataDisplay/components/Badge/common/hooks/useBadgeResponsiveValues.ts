import { useGetResponsiveValue } from '@common/hooks';

import type { BadgeNonResponsiveValueProps, BadgeResponsiveValueProps } from '../types';

type UseBadgeResponsiveValuesProps = Partial<BadgeResponsiveValueProps>;
type UseBadgeResponsiveValuesReturn = BadgeNonResponsiveValueProps;

const useBadgeResponsiveValues = (props: UseBadgeResponsiveValuesProps): UseBadgeResponsiveValuesReturn => {
	const {
		isActive: isActiveProp,
		isClickable: isClickableProp,
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isFullWidth: isFullWidthProp,
		isOutlined: isOutlinedProp,
		isRound: isRoundProp,
		isUppercase: isUppercaseProp,
		size: sizeProp,
		variant: variantProp
	} = props;

	const isActive = useGetResponsiveValue<BadgeNonResponsiveValueProps['isActive']>(isActiveProp);
	const isClickable = useGetResponsiveValue<BadgeNonResponsiveValueProps['isClickable']>(isClickableProp);
	const isCompact = useGetResponsiveValue<BadgeNonResponsiveValueProps['isCompact']>(isCompactProp);
	const isDisabled = useGetResponsiveValue<BadgeNonResponsiveValueProps['isDisabled']>(isDisabledProp);
	const isFullWidth = useGetResponsiveValue<BadgeNonResponsiveValueProps['isFullWidth']>(isFullWidthProp);
	const isOutlined = useGetResponsiveValue<BadgeNonResponsiveValueProps['isOutlined']>(isOutlinedProp);
	const isRound = useGetResponsiveValue<BadgeNonResponsiveValueProps['isRound']>(isRoundProp);
	const isUppercase = useGetResponsiveValue<BadgeNonResponsiveValueProps['isUppercase']>(isUppercaseProp);

	const size = useGetResponsiveValue<BadgeNonResponsiveValueProps['size']>(sizeProp);
	const variant = useGetResponsiveValue<BadgeNonResponsiveValueProps['variant']>(variantProp);

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
