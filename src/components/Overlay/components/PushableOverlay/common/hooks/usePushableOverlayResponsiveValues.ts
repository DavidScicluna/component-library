import { __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeRadius } from '@common/types';

import {
	__DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_FIXED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_FOCUSED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_OUTLINED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE__,
	__DEFAULT_PUSHABLE_OVERLAY_VARIANT__
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
		isActive: isActiveProp = __DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE__,
		isDisabled: isDisabledProp = __DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED__,
		isFixed: isFixedProp = __DEFAULT_PUSHABLE_OVERLAY_IS_FIXED__,
		isFocused: isFocusedProp = __DEFAULT_PUSHABLE_OVERLAY_IS_FOCUSED__,
		isOutlined: isOutlinedProp = __DEFAULT_PUSHABLE_OVERLAY_IS_OUTLINED__,
		isPushable: isPushableProp = __DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE__,
		radius: radiusProp = __DEFAULT_RADIUS__,
		variant: variantProp = __DEFAULT_PUSHABLE_OVERLAY_VARIANT__
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
