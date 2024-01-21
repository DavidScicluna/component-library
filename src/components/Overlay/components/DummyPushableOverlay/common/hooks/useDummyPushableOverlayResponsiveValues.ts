import { __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeRadius } from '@common/types';

import {
	__DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED__,
	__DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_OUTLINED__,
	__DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT__
} from '../constants';
import type { DummyPushableOverlayProps, DummyPushableOverlayVariant } from '../types';

type UseDummyPushableOverlayResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<DummyPushableOverlayProps<Element>, 'isAnimated' | 'isOutlined' | 'radius' | 'variant'>
>;

const useDummyPushableOverlayResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseDummyPushableOverlayResponsiveValuesProps<Element>
) => {
	const {
		isAnimated: isAnimatedProp = __DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED__,
		isOutlined: isOutlinedProp = __DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_OUTLINED__,
		radius: radiusProp = __DEFAULT_RADIUS__,
		variant: variantProp = __DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT__
	} = props;

	const isAnimated = useGetResponsiveValue<boolean>(isAnimatedProp);
	const isOutlined = useGetResponsiveValue<boolean>(isOutlinedProp);

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);

	const variant = useGetResponsiveValue<DummyPushableOverlayVariant>(variantProp);

	return { isAnimated, isOutlined, radius, variant };
};

export default useDummyPushableOverlayResponsiveValues;
