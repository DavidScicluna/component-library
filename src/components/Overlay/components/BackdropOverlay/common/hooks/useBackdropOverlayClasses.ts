import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import {
	DEFAULT_BACKDROP_OVERLAY_BLUR,
	DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE,
	DEFAULT_BACKDROP_OVERLAY_RADIUS
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
		blur: blurProp = DEFAULT_BACKDROP_OVERLAY_BLUR,
		blurType: blurTypeProp = DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE,
		radius: radiusProp = DEFAULT_BACKDROP_OVERLAY_RADIUS
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
