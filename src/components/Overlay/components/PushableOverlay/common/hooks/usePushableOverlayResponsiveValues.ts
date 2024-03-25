import { useGetResponsiveValue } from '@common/hooks';

import type { PushableOverlayNonResponsiveValueProps, PushableOverlayResponsiveValueProps } from '../types';

type UsePushableOverlayResponsiveValuesProps = Partial<PushableOverlayResponsiveValueProps>;
type UsePushableOverlayResponsiveValuesReturn = PushableOverlayNonResponsiveValueProps;

const usePushableOverlayResponsiveValues = (
	props: UsePushableOverlayResponsiveValuesProps
): UsePushableOverlayResponsiveValuesReturn => {
	const {
		isActive: isActiveProp,
		isDisabled: isDisabledProp,
		isFixed: isFixedProp,
		isFocused: isFocusedProp,
		isOutlined: isOutlinedProp,
		isPushable: isPushableProp,
		radius: radiusProp,
		variant: variantProp
	} = props;

	const isActive = useGetResponsiveValue<PushableOverlayNonResponsiveValueProps['isActive']>(isActiveProp);
	const isDisabled = useGetResponsiveValue<PushableOverlayNonResponsiveValueProps['isDisabled']>(isDisabledProp);
	const isFixed = useGetResponsiveValue<PushableOverlayNonResponsiveValueProps['isFixed']>(isFixedProp);
	const isFocused = useGetResponsiveValue<PushableOverlayNonResponsiveValueProps['isFocused']>(isFocusedProp);
	const isOutlined = useGetResponsiveValue<PushableOverlayNonResponsiveValueProps['isOutlined']>(isOutlinedProp);
	const isPushable = useGetResponsiveValue<PushableOverlayNonResponsiveValueProps['isPushable']>(isPushableProp);

	const radius = useGetResponsiveValue<PushableOverlayNonResponsiveValueProps['radius']>(radiusProp);

	const variant = useGetResponsiveValue<PushableOverlayNonResponsiveValueProps['variant']>(variantProp);

	return { isActive, isDisabled, isFixed, isFocused, isOutlined, isPushable, radius, variant };
};

export default usePushableOverlayResponsiveValues;
