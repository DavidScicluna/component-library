import { useGetResponsiveValue } from '@common/hooks';

import type { CardNonResponsiveValueProps, CardResponsiveValueProps } from '../types';

type UseCardResponsiveValuesProps = Partial<CardResponsiveValueProps>;
type UseCardResponsiveValuesReturn = CardNonResponsiveValueProps;

const useCardResponsiveValues = (props: UseCardResponsiveValuesProps): UseCardResponsiveValuesReturn => {
	const {
		isActive: isActiveProp,
		isClickable: isClickableProp,
		isCollapsable: isCollapsableProp,
		isDisabled: isDisabledProp,
		isDivisible: isDivisibleProp,
		isFixed: isFixedProp,
		isOpen: isOpenProp,
		isOutlined: isOutlinedProp,
		radius: radiusProp,
		spacing: spacingProp,
		variant: variantProp
	} = props;

	const isActive = useGetResponsiveValue<CardNonResponsiveValueProps['isActive']>(isActiveProp);
	const isClickable = useGetResponsiveValue<CardNonResponsiveValueProps['isClickable']>(isClickableProp);
	const isCollapsable = useGetResponsiveValue<CardNonResponsiveValueProps['isCollapsable']>(isCollapsableProp);
	const isDisabled = useGetResponsiveValue<CardNonResponsiveValueProps['isDisabled']>(isDisabledProp);
	const isDivisible = useGetResponsiveValue<CardNonResponsiveValueProps['isDivisible']>(isDivisibleProp);
	const isFixed = useGetResponsiveValue<CardNonResponsiveValueProps['isFixed']>(isFixedProp);
	const isOpen = useGetResponsiveValue<CardNonResponsiveValueProps['isOpen']>(isOpenProp);
	const isOutlined = useGetResponsiveValue<CardNonResponsiveValueProps['isOutlined']>(isOutlinedProp);

	const radius = useGetResponsiveValue<CardNonResponsiveValueProps['radius']>(radiusProp);
	const spacing = useGetResponsiveValue<CardNonResponsiveValueProps['spacing']>(spacingProp);
	const variant = useGetResponsiveValue<CardNonResponsiveValueProps['variant']>(variantProp);

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
