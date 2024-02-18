import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import {
	__DEFAULT_BACKDROP_OVERLAY_BLUR__,
	__DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE__,
	__DEFAULT_BACKDROP_OVERLAY_RADIUS__
} from '../constants';
import type { BackdropOverlayProps } from '../types';

import useBackdropOverlayResponsiveValues from './useBackdropOverlayResponsiveValues';

type UseBackdropOverlayClassesProps<Element extends PolymorphicElementType> = Pick<
	BackdropOverlayProps<Element>,
	'blur' | 'blurType' | 'radius'
>;
type UseBackdropOverlayClassesReturn = Record<'container' | 'overlay', ClassName>;

const useBackdropOverlayClasses = <Element extends PolymorphicElementType>(
	props: UseBackdropOverlayClassesProps<Element>
): UseBackdropOverlayClassesReturn => {
	const {
		blur: blurProp = __DEFAULT_BACKDROP_OVERLAY_BLUR__,
		blurType: blurTypeProp = __DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE__,
		radius: radiusProp = __DEFAULT_BACKDROP_OVERLAY_RADIUS__
	} = props;

	const { blur, blurType, radius } = useBackdropOverlayResponsiveValues<Element>({
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

export default useBackdropOverlayClasses;
