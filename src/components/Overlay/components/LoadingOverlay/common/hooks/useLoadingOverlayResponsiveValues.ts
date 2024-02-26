import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeBlurClass, ThemeRadius } from '@common/types';

import {
	DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT,
	DEFAULT_LOADING_OVERLAY_BLUR,
	DEFAULT_LOADING_OVERLAY_BLUR_TYPE,
	DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND,
	DEFAULT_LOADING_OVERLAY_HAS_GLASS,
	DEFAULT_LOADING_OVERLAY_IS_LOADING,
	DEFAULT_LOADING_OVERLAY_RADIUS
} from '../constants';
import type { LoadingOverlayBlurType, LoadingOverlayProps } from '../types';

type PickedLoadingOverlayProps =
	| 'backdropAmount'
	| 'blur'
	| 'blurType'
	| 'radius'
	| 'isLoading'
	| 'hasGlass'
	| 'hasBackground';
type UseLoadingOverlayResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<LoadingOverlayProps<Element>, PickedLoadingOverlayProps>
>;

const useLoadingOverlayResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseLoadingOverlayResponsiveValuesProps<Element>
) => {
	const {
		backdropAmount: backdropAmountProp = DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT,
		blur: blurProp = DEFAULT_LOADING_OVERLAY_BLUR,
		blurType: blurTypeProp = DEFAULT_LOADING_OVERLAY_BLUR_TYPE,
		radius: radiusProp = DEFAULT_LOADING_OVERLAY_RADIUS,
		isLoading: isLoadingProp = DEFAULT_LOADING_OVERLAY_IS_LOADING,
		hasGlass: hasGlassProp = DEFAULT_LOADING_OVERLAY_HAS_GLASS,
		hasBackground: hasBackgroundProp = DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND
	} = props;

	const backdropAmount = useGetResponsiveValue<number>(backdropAmountProp);

	const blur = useGetResponsiveValue<ThemeBlurClass>(blurProp);
	const blurType = useGetResponsiveValue<LoadingOverlayBlurType>(blurTypeProp);

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);

	const isLoading = useGetResponsiveValue<boolean>(isLoadingProp);

	const hasGlass = useGetResponsiveValue<boolean>(hasGlassProp);
	const hasBackground = useGetResponsiveValue<boolean>(hasBackgroundProp);

	return { backdropAmount, blur, blurType, radius, isLoading, hasGlass, hasBackground };
};

export default useLoadingOverlayResponsiveValues;
