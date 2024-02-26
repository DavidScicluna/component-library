import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import {
	DEFAULT_GLASS_OVERLAY_BLUR,
	DEFAULT_GLASS_OVERLAY_BLUR_TYPE,
	DEFAULT_GLASS_OVERLAY_RADIUS
} from '../constants';
import type { GlassOverlayProps } from '../types';

import useGlassOverlayResponsiveValues from './useGlassOverlayResponsiveValues';

type UseGlassOverlayClassesProps<Element extends PolymorphicElementType> = Pick<
	GlassOverlayProps<Element>,
	'blur' | 'blurType' | 'radius'
>;
type UseGlassOverlayClassesReturn = Record<'container' | 'overlay', ClassName>;

const useGlassOverlayClasses = <Element extends PolymorphicElementType>(
	props: UseGlassOverlayClassesProps<Element>
): UseGlassOverlayClassesReturn => {
	const {
		blur: blurProp = DEFAULT_GLASS_OVERLAY_BLUR,
		blurType: blurTypeProp = DEFAULT_GLASS_OVERLAY_BLUR_TYPE,
		radius: radiusProp = DEFAULT_GLASS_OVERLAY_RADIUS
	} = props;

	const { blur, blurType, radius } = useGlassOverlayResponsiveValues<Element>({
		blur: blurProp,
		blurType: blurTypeProp,
		radius: radiusProp
	});

	const overflowClassName = useGetClass((classes) => classes.layout.overflow.hidden);
	const radiusClassName = useGetClass((classes) => classes.borders.border_radius[radius]);

	const backdropBlurClassName = useGetClass((classes) => classes.filters.backdrop_blur[blur]);
	const blurClassName = useGetClass((classes) => classes.filters.blur[blur]);
	const saturateClassName = useGetClass((classes) => classes.filters.saturate[100]);

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
