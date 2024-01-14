import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeBlurClass, ThemeRadius } from '@common/types';

import {
	__DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT__,
	__DEFAULT_POSITION_OVERLAY_BLUR__,
	__DEFAULT_POSITION_OVERLAY_BLUR_TYPE__,
	__DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND__,
	__DEFAULT_POSITION_OVERLAY_HAS_GLASS__,
	__DEFAULT_POSITION_OVERLAY_IS_VISIBLE__,
	__DEFAULT_POSITION_OVERLAY_PLACEMENT__,
	__DEFAULT_POSITION_OVERLAY_RADIUS__
} from '../constants';
import type { PositionOverlayBlurType, PositionOverlayPlacement, PositionOverlayProps } from '../types';

type PickedPositionOverlayProps =
	| 'backdropAmount'
	| 'blur'
	| 'blurType'
	| 'placement'
	| 'radius'
	| 'isVisible'
	| 'hasGlass'
	| 'hasBackground';
type UsePositionOverlayResponsiveValuesProps = Partial<Pick<PositionOverlayProps, PickedPositionOverlayProps>>;

const usePositionOverlayResponsiveValues = (props: UsePositionOverlayResponsiveValuesProps) => {
	const {
		backdropAmount: backdropAmountProp = __DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT__,
		blur: blurProp = __DEFAULT_POSITION_OVERLAY_BLUR__,
		blurType: blurTypeProp = __DEFAULT_POSITION_OVERLAY_BLUR_TYPE__,
		placement: placementProp = __DEFAULT_POSITION_OVERLAY_PLACEMENT__,
		radius: radiusProp = __DEFAULT_POSITION_OVERLAY_RADIUS__,
		isVisible: isVisibleProp = __DEFAULT_POSITION_OVERLAY_IS_VISIBLE__,
		hasGlass: hasGlassProp = __DEFAULT_POSITION_OVERLAY_HAS_GLASS__,
		hasBackground: hasBackgroundProp = __DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND__
	} = props;

	const backdropAmount = useGetResponsiveValue<number>(backdropAmountProp);
	const blur = useGetResponsiveValue<PositionOverlayBlurType>(blurProp);
	const blurType = useGetResponsiveValue<ThemeBlurClass>(blurTypeProp);
	const placement = useGetResponsiveValue<PositionOverlayPlacement>(placementProp);
	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);
	const isVisible = useGetResponsiveValue<boolean>(isVisibleProp);
	const hasGlass = useGetResponsiveValue<boolean>(hasGlassProp);
	const hasBackground = useGetResponsiveValue<boolean>(hasBackgroundProp);

	return { backdropAmount, blur, blurType, placement, radius, isVisible, hasGlass, hasBackground };
};

export default usePositionOverlayResponsiveValues;
