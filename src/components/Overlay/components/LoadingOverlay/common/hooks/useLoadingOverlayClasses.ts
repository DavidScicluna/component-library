import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import {
	__DEFAULT_LOADING_OVERLAY_BLUR__,
	__DEFAULT_LOADING_OVERLAY_BLUR_TYPE__,
	__DEFAULT_LOADING_OVERLAY_HAS_GLASS__,
	__DEFAULT_LOADING_OVERLAY_RADIUS__
} from '../constants';
import type { LoadingOverlayProps } from '../types';

import useLoadingOverlayResponsiveValues from './useLoadingOverlayResponsiveValues';

type UseLoadingOverlayClassesProps<Element extends PolymorphicElementType> = Pick<
	LoadingOverlayProps<Element>,
	'blur' | 'blurType' | 'radius' | 'hasGlass'
>;
type UseLoadingOverlayClassesReturn = Record<'container' | 'overlay', ClassName>;

// TODO: Remove Get from all GetClasses hooks names
const useLoadingOverlayClasses = <Element extends PolymorphicElementType>(
	props: UseLoadingOverlayClassesProps<Element>
): UseLoadingOverlayClassesReturn => {
	const {
		blur: blurProp = __DEFAULT_LOADING_OVERLAY_BLUR__,
		blurType: blurTypeProp = __DEFAULT_LOADING_OVERLAY_BLUR_TYPE__,
		radius: radiusProp = __DEFAULT_LOADING_OVERLAY_RADIUS__,
		hasGlass: hasGlassProp = __DEFAULT_LOADING_OVERLAY_HAS_GLASS__
	} = props;

	const { blur, blurType, radius, hasGlass } = useLoadingOverlayResponsiveValues<Element>({
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

export default useLoadingOverlayClasses;
