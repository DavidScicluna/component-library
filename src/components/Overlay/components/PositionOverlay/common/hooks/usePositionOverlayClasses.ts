import type { ElementType } from 'react';

import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { BackdropBlurClass, ClassName, SaturateClass, ThemeRadius } from '@common/types';
import type { OverflowClass } from '@common/types/classes';

import {
	__DEFAULT_POSITION_OVERLAY_BLUR__,
	__DEFAULT_POSITION_OVERLAY_BLUR_TYPE__,
	__DEFAULT_POSITION_OVERLAY_HAS_GLASS__,
	__DEFAULT_POSITION_OVERLAY_RADIUS__
} from '../constants';
import type { PositionOverlayProps } from '../types';

type UsePositionOverlayClassesProps<Element extends ElementType> = Pick<
	PositionOverlayProps<Element>,
	'blur' | 'blurType' | 'radius' | 'hasGlass'
>;
type UsePositionOverlayClassesReturn = Record<'container' | 'overlay', ClassName>;

// TODO: Remove Get from all GetClasses hooks names
const usePositionOverlayClasses = <Element extends ElementType>(
	props: UsePositionOverlayClassesProps<Element>
): UsePositionOverlayClassesReturn => {
	const {
		blur = __DEFAULT_POSITION_OVERLAY_BLUR__,
		blurType = __DEFAULT_POSITION_OVERLAY_BLUR_TYPE__,
		radius = __DEFAULT_POSITION_OVERLAY_RADIUS__,
		hasGlass = __DEFAULT_POSITION_OVERLAY_HAS_GLASS__
	} = props;

	const overflowClassName = useGetClass<OverflowClass>('hidden', ['layout', 'overflow']);
	const radiusClassName = useGetClass<ThemeRadius>(radius, ['borders', 'border_radius']);

	const backdropBlurClassName = useGetClass<BackdropBlurClass>(blur, ['filters', 'backdrop_blur']);
	const blurClassName = useGetClass<BackdropBlurClass>(blur, ['filters', 'blur']);
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
