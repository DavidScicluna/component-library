import type { ElementType } from 'react';

import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type {
	ClassName,
	OverflowClass,
	PolymorphicDefaultElement,
	SaturateClass,
	ThemeBlurClass,
	ThemeRadius
} from '@common/types';

import {
	__DEFAULT_BACKDROP_OVERLAY_BLUR__,
	__DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE__,
	__DEFAULT_BACKDROP_OVERLAY_RADIUS__
} from '../constants';
import type { BackdropOverlayProps } from '../types';

type UseBackdropOverlayClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	BackdropOverlayProps<Element>,
	'blur' | 'blurType' | 'radius'
>;
type UseBackdropOverlayClassesReturn = Record<'container' | 'overlay', ClassName>;

const useBackdropOverlayClasses = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseBackdropOverlayClassesProps<Element>
): UseBackdropOverlayClassesReturn => {
	const {
		blur = __DEFAULT_BACKDROP_OVERLAY_BLUR__,
		blurType = __DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE__,
		radius = __DEFAULT_BACKDROP_OVERLAY_RADIUS__
	} = props;

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

export default useBackdropOverlayClasses;
