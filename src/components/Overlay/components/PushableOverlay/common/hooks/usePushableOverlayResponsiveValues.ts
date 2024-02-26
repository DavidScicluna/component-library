import { DEFAULT_RADIUS } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeRadius } from '@common/types';

import {
	DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE,
	DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED,
	DEFAULT_PUSHABLE_OVERLAY_IS_FIXED,
	DEFAULT_PUSHABLE_OVERLAY_IS_FOCUSED,
	DEFAULT_PUSHABLE_OVERLAY_IS_OUTLINED,
	DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE,
	DEFAULT_PUSHABLE_OVERLAY_VARIANT
} from '../constants';
import type { PushableOverlayProps, PushableOverlayVariant } from '../types';

type PickedPushableOverlayProps =
	| 'isActive'
	| 'isDisabled'
	| 'isFixed'
	| 'isFocused'
	| 'isOutlined'
	| 'isPushable'
	| 'radius'
	| 'variant';
type UsePushableOverlayResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<PushableOverlayProps<Element>, PickedPushableOverlayProps>
>;

const usePushableOverlayResponsiveValues = <Element extends PolymorphicElementType>(
	props: UsePushableOverlayResponsiveValuesProps<Element>
) => {
	const {
		isActive: isActiveProp = DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE,
		isDisabled: isDisabledProp = DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED,
		isFixed: isFixedProp = DEFAULT_PUSHABLE_OVERLAY_IS_FIXED,
		isFocused: isFocusedProp = DEFAULT_PUSHABLE_OVERLAY_IS_FOCUSED,
		isOutlined: isOutlinedProp = DEFAULT_PUSHABLE_OVERLAY_IS_OUTLINED,
		isPushable: isPushableProp = DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE,
		radius: radiusProp = DEFAULT_RADIUS,
		variant: variantProp = DEFAULT_PUSHABLE_OVERLAY_VARIANT
	} = props;

	const isActive = useGetResponsiveValue<boolean>(isActiveProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isFixed = useGetResponsiveValue<boolean>(isFixedProp);
	const isFocused = useGetResponsiveValue<boolean>(isFocusedProp);
	const isOutlined = useGetResponsiveValue<boolean>(isOutlinedProp);
	const isPushable = useGetResponsiveValue<boolean>(isPushableProp);

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);

	const variant = useGetResponsiveValue<PushableOverlayVariant>(variantProp);

	return { isActive, isDisabled, isFixed, isFocused, isOutlined, isPushable, radius, variant };
};

export default usePushableOverlayResponsiveValues;
