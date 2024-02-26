import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeBlurClass, ThemeRadius } from '@common/types';

import {
	DEFAULT_BACKDROP_OVERLAY_AMOUNT,
	DEFAULT_BACKDROP_OVERLAY_BLUR,
	DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE,
	DEFAULT_BACKDROP_OVERLAY_RADIUS
} from '../constants';
import type { BackdropOverlayBlurType, BackdropOverlayProps } from '../types';

type UseBackdropOverlayResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<BackdropOverlayProps<Element>, 'amount' | 'blur' | 'blurType' | 'radius'>
>;

const useBackdropOverlayResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseBackdropOverlayResponsiveValuesProps<Element>
) => {
	const {
		amount: amountProp = DEFAULT_BACKDROP_OVERLAY_AMOUNT,
		blur: blurProp = DEFAULT_BACKDROP_OVERLAY_BLUR,
		blurType: blurTypeProp = DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE,
		radius: radiusProp = DEFAULT_BACKDROP_OVERLAY_RADIUS
	} = props;

	const amount = useGetResponsiveValue<number>(amountProp);

	const blur = useGetResponsiveValue<ThemeBlurClass>(blurProp);
	const blurType = useGetResponsiveValue<BackdropOverlayBlurType>(blurTypeProp);

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);

	return { amount, blur, blurType, radius };
};

export default useBackdropOverlayResponsiveValues;
