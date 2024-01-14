import { useGetClass } from '@common/hooks';
import type { ClassName, OverflowClass, SaturateClass, ThemeBlurClass, ThemeRadius } from '@common/types';

import {
	__DEFAULT_BACKDROP_OVERLAY_BLUR__,
	__DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE__,
	__DEFAULT_BACKDROP_OVERLAY_RADIUS__
} from '../constants';
import type { BackdropOverlayProps } from '../types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseBackdropOverlayClassesProps = Pick<BackdropOverlayProps, 'blur' | 'blurType' | 'radius'>;
type UseBackdropOverlayClassesReturn = Record<'container' | 'overlay', ClassName>;

const useBackdropOverlayClasses = (props: UseBackdropOverlayClassesProps): UseBackdropOverlayClassesReturn => {
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
