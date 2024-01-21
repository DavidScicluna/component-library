import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeBlurClass, ThemeRadius } from '@common/types';

import {
	__DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT__,
	__DEFAULT_GLASS_OVERLAY_BLUR__,
	__DEFAULT_GLASS_OVERLAY_BLUR_TYPE__,
	__DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND__,
	__DEFAULT_GLASS_OVERLAY_RADIUS__
} from '../constants';
import type { GlassOverlayBlurType, GlassOverlayProps } from '../types';

type UseGlassOverlayResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<GlassOverlayProps<Element>, 'backdropAmount' | 'blur' | 'blurType' | 'radius' | 'hasBackground'>
>;

const useGlassOverlayResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseGlassOverlayResponsiveValuesProps<Element>
) => {
	const {
		backdropAmount: backdropAmountProp = __DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT__,
		blur: blurProp = __DEFAULT_GLASS_OVERLAY_BLUR__,
		blurType: blurTypeProp = __DEFAULT_GLASS_OVERLAY_BLUR_TYPE__,
		radius: radiusProp = __DEFAULT_GLASS_OVERLAY_RADIUS__,
		hasBackground: hasBackgroundProp = __DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND__
	} = props;

	const backdropAmount = useGetResponsiveValue<number>(backdropAmountProp);

	const blur = useGetResponsiveValue<ThemeBlurClass>(blurProp);
	const blurType = useGetResponsiveValue<GlassOverlayBlurType>(blurTypeProp);

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);

	const hasBackground = useGetResponsiveValue<boolean>(hasBackgroundProp);

	return { backdropAmount, blur, blurType, radius, hasBackground };
};

export default useGlassOverlayResponsiveValues;
