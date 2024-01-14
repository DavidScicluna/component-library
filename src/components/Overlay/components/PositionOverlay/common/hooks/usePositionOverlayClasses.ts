import { useGetClass } from '@common/hooks';
import type { ClassName, OverflowClass, SaturateClass, ThemeBlurClass, ThemeRadius } from '@common/types';

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

type UsePositionOverlayClassesProps = Pick<PositionOverlayProps, 'blur' | 'blurType' | 'radius' | 'hasGlass'>;
type UsePositionOverlayClassesReturn = Record<'container' | 'overlay', ClassName>;

// TODO: Remove Get from all GetClasses hooks names
const usePositionOverlayClasses = (props: UsePositionOverlayClassesProps): UsePositionOverlayClassesReturn => {
	const {
		blur: blurProp = __DEFAULT_POSITION_OVERLAY_BLUR__,
		blurType: blurTypeProp = __DEFAULT_POSITION_OVERLAY_BLUR_TYPE__,
		radius: radiusProp = __DEFAULT_POSITION_OVERLAY_RADIUS__,
		hasGlass: hasGlassProp = __DEFAULT_POSITION_OVERLAY_HAS_GLASS__
	} = props;

	const { blur, blurType, radius, hasGlass } = usePositionOverlayResponsiveValues({
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

export default usePositionOverlayClasses;
