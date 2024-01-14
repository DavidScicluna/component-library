import { useGetClass } from '@common/hooks';
import type { ClassName, OverflowClass, SaturateClass, ThemeBlurClass, ThemeRadius } from '@common/types';

import {
	__DEFAULT_LOADING_OVERLAY_BLUR__,
	__DEFAULT_LOADING_OVERLAY_BLUR_TYPE__,
	__DEFAULT_LOADING_OVERLAY_HAS_GLASS__,
	__DEFAULT_LOADING_OVERLAY_RADIUS__
} from '../constants';
import type { LoadingOverlayProps } from '../types';

import useLoadingOverlayResponsiveValues from './useLoadingOverlayResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseLoadingOverlayClassesProps = Pick<LoadingOverlayProps, 'blur' | 'blurType' | 'radius' | 'hasGlass'>;
type UseLoadingOverlayClassesReturn = Record<'container' | 'overlay', ClassName>;

// TODO: Remove Get from all GetClasses hooks names
const useLoadingOverlayClasses = (props: UseLoadingOverlayClassesProps): UseLoadingOverlayClassesReturn => {
	const {
		blur: blurProp = __DEFAULT_LOADING_OVERLAY_BLUR__,
		blurType: blurTypeProp = __DEFAULT_LOADING_OVERLAY_BLUR_TYPE__,
		radius: radiusProp = __DEFAULT_LOADING_OVERLAY_RADIUS__,
		hasGlass: hasGlassProp = __DEFAULT_LOADING_OVERLAY_HAS_GLASS__
	} = props;

	const { blur, blurType, radius, hasGlass } = useLoadingOverlayResponsiveValues({
		blur: blurProp,
		blurType: blurTypeProp,
		radius: radiusProp,
		hasGlass: hasGlassProp
	});

	const overflowClassName = useGetClass<OverflowClass>('hidden', ['layout', 'overflow']);
	const radiusClassName = useGetClass<ThemeRadius>(radius, ['borders', 'border_radius']);

	const backdropBlurClassName = useGetClass<ThemeBlurClass>(blur, ['filters', 'backdrop_blur']);
	const blurClassName = useGetClass<ThemeBlurClass>(blur, ['filters', 'blur']);
	const saturateClassName = useGetClass<SaturateClass>(100, ['filters', 'saturate']);

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
