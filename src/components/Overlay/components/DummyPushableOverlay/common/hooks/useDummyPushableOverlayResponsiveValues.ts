import { DEFAULT_RADIUS } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeRadius } from '@common/types';

import {
	DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED,
	DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_OUTLINED,
	DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT
} from '../constants';
import type { DummyPushableOverlayProps, DummyPushableOverlayVariant } from '../types';

type UseDummyPushableOverlayResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<DummyPushableOverlayProps<Element>, 'isAnimated' | 'isOutlined' | 'radius' | 'variant'>
>;

const useDummyPushableOverlayResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseDummyPushableOverlayResponsiveValuesProps<Element>
) => {
	const {
		isAnimated: isAnimatedProp = DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED,
		isOutlined: isOutlinedProp = DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_OUTLINED,
		radius: radiusProp = DEFAULT_RADIUS,
		variant: variantProp = DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT
	} = props;

	const isAnimated = useGetResponsiveValue<boolean>(isAnimatedProp);
	const isOutlined = useGetResponsiveValue<boolean>(isOutlinedProp);

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);

	const variant = useGetResponsiveValue<DummyPushableOverlayVariant>(variantProp);

	return { isAnimated, isOutlined, radius, variant };
};

export default useDummyPushableOverlayResponsiveValues;
