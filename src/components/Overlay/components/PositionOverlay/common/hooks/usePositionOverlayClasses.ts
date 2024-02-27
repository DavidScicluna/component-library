import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import {
	DEFAULT_POSITION_OVERLAY_BLUR,
	DEFAULT_POSITION_OVERLAY_BLUR_TYPE,
	DEFAULT_POSITION_OVERLAY_HAS_GLASS,
	DEFAULT_POSITION_OVERLAY_RADIUS
} from '../constants';
import type { PositionOverlayProps } from '../types';

import usePositionOverlayResponsiveValues from './usePositionOverlayResponsiveValues';

type UsePositionOverlayClassesProps<Element extends PolymorphicElementType> = Pick<
	PositionOverlayProps<Element>,
	'blur' | 'blurType' | 'radius' | 'hasGlass'
>;
type UsePositionOverlayClassesReturn = Record<'container' | 'overlay', ClassName>;

const usePositionOverlayClasses = <Element extends PolymorphicElementType>(
	props: UsePositionOverlayClassesProps<Element>
): UsePositionOverlayClassesReturn => {
	const {
		blur: blurProp = DEFAULT_POSITION_OVERLAY_BLUR,
		blurType: blurTypeProp = DEFAULT_POSITION_OVERLAY_BLUR_TYPE,
		radius: radiusProp = DEFAULT_POSITION_OVERLAY_RADIUS,
		hasGlass: hasGlassProp = DEFAULT_POSITION_OVERLAY_HAS_GLASS
	} = props;

	const { blur, blurType, radius, hasGlass } = usePositionOverlayResponsiveValues<Element>({
		blur: blurProp,
		blurType: blurTypeProp,
		radius: radiusProp,
		hasGlass: hasGlassProp
	});

	const overflowClassName = useGetClass((classes) => classes.layout.overflow.hidden);
	const radiusClassName = useGetClass((classes) => classes.borders.border_radius[radius]);

	const backdropBlurClassName = useGetClass((classes) => classes.filters.backdrop_blur[blur]);
	const blurClassName = useGetClass((classes) => classes.filters.blur[blur]);
	const saturateClassName = useGetClass((classes) => classes.filters.saturate[100]);

	return {
		container: classNames(overflowClassName, radiusClassName),
		overlay: classNames(radiusClassName, {
			[saturateClassName]: hasGlass && blur !== 'none',
			[backdropBlurClassName]: hasGlass && blur !== 'none' && blurType === 'backdrop',
			[blurClassName]: hasGlass && blur !== 'none' && blurType === 'blur'
		})
	};
};

export default usePositionOverlayClasses;
