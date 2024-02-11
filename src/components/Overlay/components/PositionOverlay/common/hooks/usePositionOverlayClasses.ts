import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import {
	__DEFAULT_POSITION_OVERLAY_BLUR__,
	__DEFAULT_POSITION_OVERLAY_BLUR_TYPE__,
	__DEFAULT_POSITION_OVERLAY_HAS_GLASS__,
	__DEFAULT_POSITION_OVERLAY_RADIUS__
} from '../constants';
import type { PositionOverlayProps } from '../types';

import usePositionOverlayResponsiveValues from './usePositionOverlayResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UsePositionOverlayClassesProps<Element extends PolymorphicElementType> = Pick<
	PositionOverlayProps<Element>,
	'blur' | 'blurType' | 'radius' | 'hasGlass'
>;
type UsePositionOverlayClassesReturn = Record<'container' | 'overlay', ClassName>;

// TODO: Remove Get from all GetClasses hooks names
const usePositionOverlayClasses = <Element extends PolymorphicElementType>(
	props: UsePositionOverlayClassesProps<Element>
): UsePositionOverlayClassesReturn => {
	const {
		blur: blurProp = __DEFAULT_POSITION_OVERLAY_BLUR__,
		blurType: blurTypeProp = __DEFAULT_POSITION_OVERLAY_BLUR_TYPE__,
		radius: radiusProp = __DEFAULT_POSITION_OVERLAY_RADIUS__,
		hasGlass: hasGlassProp = __DEFAULT_POSITION_OVERLAY_HAS_GLASS__
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
