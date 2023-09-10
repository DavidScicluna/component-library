import type { ElementType } from 'react';

import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { BackdropBlurClass, ClassName, OverflowClass, SaturateClass, ThemeRadius } from '@common/types';

import {
	__DEFAULT_GLASS_OVERLAY_BLUR__,
	__DEFAULT_GLASS_OVERLAY_BLUR_TYPE__,
	__DEFAULT_GLASS_OVERLAY_RADIUS__
} from '../constants';
import type { GlassOverlayProps } from '../types';

type UseGlassOverlayClassesProps<Element extends ElementType> = Pick<
	GlassOverlayProps<Element>,
	'blur' | 'blurType' | 'radius'
>;
type UseGlassOverlayClassesReturn = Record<'container' | 'overlay', ClassName>;

// TODO: Remove Get from all GetClasses hooks names
const useGlassOverlayClasses = <Element extends ElementType>(
	props: UseGlassOverlayClassesProps<Element>
): UseGlassOverlayClassesReturn => {
	const {
		blur = __DEFAULT_GLASS_OVERLAY_BLUR__,
		blurType = __DEFAULT_GLASS_OVERLAY_BLUR_TYPE__,
		radius = __DEFAULT_GLASS_OVERLAY_RADIUS__
	} = props;

	const overflowClassName = useGetClass<OverflowClass>('hidden', ['layout', 'overflow']);
	const radiusClassName = useGetClass<ThemeRadius>(radius, ['borders', 'border_radius']);

	const backdropBlurClassName = useGetClass<BackdropBlurClass>(blur, ['filters', 'backdrop_blur']);
	const blurClassName = useGetClass<BackdropBlurClass>(blur, ['filters', 'blur']);
	const saturateClassName = useGetClass<SaturateClass>(100, ['filters', 'saturate']);

	return {
		container: classNames(overflowClassName, radiusClassName),
		overlay: classNames(radiusClassName, {
			[saturateClassName]: blur !== 'none',
			[backdropBlurClassName]: blur !== 'none' && blurType === 'backdrop',
			[blurClassName]: blur !== 'none' && blurType === 'blur'
		})
	};
};

export default useGlassOverlayClasses;
