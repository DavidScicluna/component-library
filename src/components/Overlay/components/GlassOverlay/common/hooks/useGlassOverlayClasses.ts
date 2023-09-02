import type { ElementType } from 'react';

import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { BackdropBlurClass, ClassName, SaturateClass } from '@common/types';

import { __DEFAULT_GLASS_OVERLAY_BLUR__, __DEFAULT_GLASS_OVERLAY_BLUR_TYPE__ } from '../constants';
import type { GlassOverlayProps } from '../types';

type UseGlassOverlayClassesProps<Element extends ElementType> = Pick<GlassOverlayProps<Element>, 'blur' | 'blurType'>;
type UseGlassOverlayClassesReturn = ClassName;

// TODO: Remove Get from all GetClasses hooks names
const useGlassOverlayClasses = <Element extends ElementType>(
	props: UseGlassOverlayClassesProps<Element>
): UseGlassOverlayClassesReturn => {
	const { blur = __DEFAULT_GLASS_OVERLAY_BLUR__, blurType = __DEFAULT_GLASS_OVERLAY_BLUR_TYPE__ } = props;

	const backdropBlurClassName = useGetClass<BackdropBlurClass>(blur, ['filters', 'backdrop_blur']);
	const blurClassName = useGetClass<BackdropBlurClass>(blur, ['filters', 'blur']);
	const saturateClassName = useGetClass<SaturateClass>(100, ['filters', 'saturate']);

	return classNames({
		[saturateClassName]: blur !== 'none',
		[backdropBlurClassName]: blur !== 'none' && blurType === 'backdrop',
		[blurClassName]: blur !== 'none' && blurType === 'blur'
	});
};

export default useGlassOverlayClasses;
