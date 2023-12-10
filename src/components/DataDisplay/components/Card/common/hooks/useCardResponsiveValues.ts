import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeRadius, ThemeSpacing } from '@common/types';

import {
	__DEFAULT_CARD_IS_ACTIVE__,
	__DEFAULT_CARD_IS_CLICKABLE__,
	__DEFAULT_CARD_IS_COLLAPSABLE__,
	__DEFAULT_CARD_IS_DISABLED__,
	__DEFAULT_CARD_IS_DIVISIBLE__,
	__DEFAULT_CARD_IS_FIXED__,
	__DEFAULT_CARD_IS_OPEN__,
	__DEFAULT_CARD_IS_OUTLINED__,
	__DEFAULT_CARD_RADIUS__,
	__DEFAULT_CARD_VARIANT__
} from '../constants';
import type { CardProps, CardVariant } from '../types';

type UseCardResponsiveValuesProps = Partial<
	Pick<
		CardProps,
		| 'isActive'
		| 'isClickable'
		| 'isCollapsable'
		| 'isDisabled'
		| 'isDivisible'
		| 'isFixed'
		| 'isOpen'
		| 'isOutlined'
		| 'radius'
		| 'spacing'
		| 'variant'
	>
>;

const useCardResponsiveValues = (props: UseCardResponsiveValuesProps) => {
	const {
		isActive: isActiveProp = __DEFAULT_CARD_IS_ACTIVE__,
		isClickable: isClickableProp = __DEFAULT_CARD_IS_CLICKABLE__,
		isCollapsable: isCollapsableProp = __DEFAULT_CARD_IS_COLLAPSABLE__,
		isDisabled: isDisabledProp = __DEFAULT_CARD_IS_DISABLED__,
		isDivisible: isDivisibleProp = __DEFAULT_CARD_IS_DIVISIBLE__,
		isFixed: isFixedProp = __DEFAULT_CARD_IS_FIXED__,
		isOpen: isOpenProp = __DEFAULT_CARD_IS_OPEN__,
		isOutlined: isOutlinedProp = __DEFAULT_CARD_IS_OUTLINED__,
		radius: radiusProp = __DEFAULT_CARD_RADIUS__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		variant: variantProp = __DEFAULT_CARD_VARIANT__
	} = props;

	const isActive = useGetResponsiveValue<boolean>(isActiveProp);
	const isClickable = useGetResponsiveValue<boolean>(isClickableProp);
	const isCollapsable = useGetResponsiveValue<boolean>(isCollapsableProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isDivisible = useGetResponsiveValue<boolean>(isDivisibleProp);
	const isFixed = useGetResponsiveValue<boolean>(isFixedProp);
	const isOpen = useGetResponsiveValue<boolean>(isOpenProp);
	const isOutlined = useGetResponsiveValue<boolean>(isOutlinedProp);

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);
	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);
	const variant = useGetResponsiveValue<CardVariant>(variantProp);

	return {
		isActive,
		isClickable,
		isCollapsable,
		isDisabled,
		isDivisible,
		isFixed,
		isOpen,
		isOutlined,
		radius,
		spacing,
		variant
	};
};

export default useCardResponsiveValues;
