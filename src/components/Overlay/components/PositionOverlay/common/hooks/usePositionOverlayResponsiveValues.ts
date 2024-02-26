import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeBlurClass, ThemeRadius } from '@common/types';

import {
	DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT,
	DEFAULT_POSITION_OVERLAY_BLUR,
	DEFAULT_POSITION_OVERLAY_BLUR_TYPE,
	DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND,
	DEFAULT_POSITION_OVERLAY_HAS_GLASS,
	DEFAULT_POSITION_OVERLAY_IS_VISIBLE,
	DEFAULT_POSITION_OVERLAY_RADIUS
} from '../constants';
import type { PositionOverlayBlurType, PositionOverlayProps } from '../types';

type PickedPositionOverlayProps =
	| 'backdropAmount'
	| 'blur'
	| 'blurType'
	| 'radius'
	| 'isVisible'
	| 'hasGlass'
	| 'hasBackground';
type UsePositionOverlayResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<PositionOverlayProps<Element>, PickedPositionOverlayProps>
>;

const usePositionOverlayResponsiveValues = <Element extends PolymorphicElementType>(
	props: UsePositionOverlayResponsiveValuesProps<Element>
) => {
	const {
		backdropAmount: backdropAmountProp = DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT,
		blur: blurProp = DEFAULT_POSITION_OVERLAY_BLUR,
		blurType: blurTypeProp = DEFAULT_POSITION_OVERLAY_BLUR_TYPE,
		radius: radiusProp = DEFAULT_POSITION_OVERLAY_RADIUS,
		isVisible: isVisibleProp = DEFAULT_POSITION_OVERLAY_IS_VISIBLE,
		hasGlass: hasGlassProp = DEFAULT_POSITION_OVERLAY_HAS_GLASS,
		hasBackground: hasBackgroundProp = DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND
	} = props;

	const backdropAmount = useGetResponsiveValue<number>(backdropAmountProp);
	const blur = useGetResponsiveValue<ThemeBlurClass>(blurProp);
	const blurType = useGetResponsiveValue<PositionOverlayBlurType>(blurTypeProp);
	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);
	const isVisible = useGetResponsiveValue<boolean>(isVisibleProp);
	const hasGlass = useGetResponsiveValue<boolean>(hasGlassProp);
	const hasBackground = useGetResponsiveValue<boolean>(hasBackgroundProp);

	return { backdropAmount, blur, blurType, radius, isVisible, hasGlass, hasBackground };
};

export default usePositionOverlayResponsiveValues;
