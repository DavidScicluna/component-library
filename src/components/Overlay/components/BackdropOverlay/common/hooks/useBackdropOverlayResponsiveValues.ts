import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeBlurClass, ThemeRadius } from '@common/types';

import {
	__DEFAULT_BACKDROP_OVERLAY_AMOUNT__,
	__DEFAULT_BACKDROP_OVERLAY_BLUR__,
	__DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE__,
	__DEFAULT_BACKDROP_OVERLAY_RADIUS__
} from '../constants';
import type { BackdropOverlayBlurType, BackdropOverlayProps } from '../types';

type UseBackdropOverlayResponsiveValuesProps = Partial<
	Pick<BackdropOverlayProps, 'amount' | 'blur' | 'blurType' | 'radius'>
>;

const useBackdropOverlayResponsiveValues = (props: UseBackdropOverlayResponsiveValuesProps) => {
	const {
		amount: amountProp = __DEFAULT_BACKDROP_OVERLAY_AMOUNT__,
		blur: blurProp = __DEFAULT_BACKDROP_OVERLAY_BLUR__,
		blurType: blurTypeProp = __DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE__,
		radius: radiusProp = __DEFAULT_BACKDROP_OVERLAY_RADIUS__
	} = props;

	const amount = useGetResponsiveValue<number>(amountProp);

	const blur = useGetResponsiveValue<ThemeBlurClass>(blurProp);
	const blurType = useGetResponsiveValue<BackdropOverlayBlurType>(blurTypeProp);

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);

	return { amount, blur, blurType, radius };
};

export default useBackdropOverlayResponsiveValues;
