import { DEFAULT_SPACING } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeRadius, ThemeSpacing } from '@common/types';

import {
	DEFAULT_CARD_IS_ACTIVE,
	DEFAULT_CARD_IS_CLICKABLE,
	DEFAULT_CARD_IS_COLLAPSABLE,
	DEFAULT_CARD_IS_DISABLED,
	DEFAULT_CARD_IS_DIVISIBLE,
	DEFAULT_CARD_IS_FIXED,
	DEFAULT_CARD_IS_OPEN,
	DEFAULT_CARD_IS_OUTLINED,
	DEFAULT_CARD_RADIUS,
	DEFAULT_CARD_VARIANT
} from '../constants';
import type { CardElement, CardProps, CardVariant } from '../types';

type PickedCardProps =
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
	| 'variant';
type UseCardResponsiveValuesProps<Element extends CardElement> = Partial<Pick<CardProps<Element>, PickedCardProps>>;

const useCardResponsiveValues = <Element extends CardElement>(props: UseCardResponsiveValuesProps<Element>) => {
	const {
		isActive: isActiveProp = DEFAULT_CARD_IS_ACTIVE,
		isClickable: isClickableProp = DEFAULT_CARD_IS_CLICKABLE,
		isCollapsable: isCollapsableProp = DEFAULT_CARD_IS_COLLAPSABLE,
		isDisabled: isDisabledProp = DEFAULT_CARD_IS_DISABLED,
		isDivisible: isDivisibleProp = DEFAULT_CARD_IS_DIVISIBLE,
		isFixed: isFixedProp = DEFAULT_CARD_IS_FIXED,
		isOpen: isOpenProp = DEFAULT_CARD_IS_OPEN,
		isOutlined: isOutlinedProp = DEFAULT_CARD_IS_OUTLINED,
		radius: radiusProp = DEFAULT_CARD_RADIUS,
		spacing: spacingProp = DEFAULT_SPACING,
		variant: variantProp = DEFAULT_CARD_VARIANT
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
