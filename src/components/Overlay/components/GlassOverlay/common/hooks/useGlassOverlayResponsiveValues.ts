import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeBlurClass, ThemeRadius } from '@common/types';

import {
	DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT,
	DEFAULT_GLASS_OVERLAY_BLUR,
	DEFAULT_GLASS_OVERLAY_BLUR_TYPE,
	DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND,
	DEFAULT_GLASS_OVERLAY_RADIUS
} from '../constants';
import type { GlassOverlayBlurType, GlassOverlayProps } from '../types';

type UseGlassOverlayResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<GlassOverlayProps<Element>, 'backdropAmount' | 'blur' | 'blurType' | 'radius' | 'hasBackground'>
>;

const useGlassOverlayResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseGlassOverlayResponsiveValuesProps<Element>
) => {
	const {
		backdropAmount: backdropAmountProp = DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT,
		blur: blurProp = DEFAULT_GLASS_OVERLAY_BLUR,
		blurType: blurTypeProp = DEFAULT_GLASS_OVERLAY_BLUR_TYPE,
		radius: radiusProp = DEFAULT_GLASS_OVERLAY_RADIUS,
		hasBackground: hasBackgroundProp = DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND
	} = props;

	const backdropAmount = useGetResponsiveValue<number>(backdropAmountProp);

	const blur = useGetResponsiveValue<ThemeBlurClass>(blurProp);
	const blurType = useGetResponsiveValue<GlassOverlayBlurType>(blurTypeProp);

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);

	const hasBackground = useGetResponsiveValue<boolean>(hasBackgroundProp);

	return { backdropAmount, blur, blurType, radius, hasBackground };
};

export default useGlassOverlayResponsiveValues;
