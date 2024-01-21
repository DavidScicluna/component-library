import { useGetClass } from '@common/hooks';
import type {
	ClassName,
	OverflowClass,
	PolymorphicElementType,
	SaturateClass,
	ThemeBlurClass,
	ThemeRadius
} from '@common/types';

import {
	__DEFAULT_GLASS_OVERLAY_BLUR__,
	__DEFAULT_GLASS_OVERLAY_BLUR_TYPE__,
	__DEFAULT_GLASS_OVERLAY_RADIUS__
} from '../constants';
import type { GlassOverlayProps } from '../types';

import useGlassOverlayResponsiveValues from './useGlassOverlayResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseGlassOverlayClassesProps<Element extends PolymorphicElementType> = Pick<
	GlassOverlayProps<Element>,
	'blur' | 'blurType' | 'radius'
>;
type UseGlassOverlayClassesReturn = Record<'container' | 'overlay', ClassName>;

// TODO: Remove Get from all GetClasses hooks names
const useGlassOverlayClasses = <Element extends PolymorphicElementType>(
	props: UseGlassOverlayClassesProps<Element>
): UseGlassOverlayClassesReturn => {
	const {
		blur: blurProp = __DEFAULT_GLASS_OVERLAY_BLUR__,
		blurType: blurTypeProp = __DEFAULT_GLASS_OVERLAY_BLUR_TYPE__,
		radius: radiusProp = __DEFAULT_GLASS_OVERLAY_RADIUS__
	} = props;

	const { blur, blurType, radius } = useGlassOverlayResponsiveValues<Element>({
		blur: blurProp,
		blurType: blurTypeProp,
		radius: radiusProp
	});

	const overflowClassName = useGetClass<OverflowClass>('hidden', ['layout', 'overflow']);
	const radiusClassName = useGetClass<ThemeRadius>(radius, ['borders', 'border_radius']);

	const backdropBlurClassName = useGetClass<ThemeBlurClass>(blur, ['filters', 'backdrop_blur']);
	const blurClassName = useGetClass<ThemeBlurClass>(blur, ['filters', 'blur']);
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
