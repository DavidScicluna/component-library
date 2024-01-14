import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeBlurClass, ThemeRadius } from '@common/types';

import {
	__DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT__,
	__DEFAULT_LOADING_OVERLAY_BLUR__,
	__DEFAULT_LOADING_OVERLAY_BLUR_TYPE__,
	__DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND__,
	__DEFAULT_LOADING_OVERLAY_HAS_GLASS__,
	__DEFAULT_LOADING_OVERLAY_IS_LOADING__,
	__DEFAULT_LOADING_OVERLAY_RADIUS__
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
type UseLoadingOverlayResponsiveValuesProps = Partial<Pick<LoadingOverlayProps, PickedLoadingOverlayProps>>;

const useLoadingOverlayResponsiveValues = (props: UseLoadingOverlayResponsiveValuesProps) => {
	const {
		backdropAmount: backdropAmountProp = __DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT__,
		blur: blurProp = __DEFAULT_LOADING_OVERLAY_BLUR__,
		blurType: blurTypeProp = __DEFAULT_LOADING_OVERLAY_BLUR_TYPE__,
		radius: radiusProp = __DEFAULT_LOADING_OVERLAY_RADIUS__,
		isLoading: isLoadingProp = __DEFAULT_LOADING_OVERLAY_IS_LOADING__,
		hasGlass: hasGlassProp = __DEFAULT_LOADING_OVERLAY_HAS_GLASS__,
		hasBackground: hasBackgroundProp = __DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND__
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
