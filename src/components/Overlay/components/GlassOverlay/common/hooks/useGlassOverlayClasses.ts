import type { ElementType } from 'react';

import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { BackdropBlurClass, ClassName, SaturateClass } from '@common/types';

import { __DEFAULT_GLASS_OVERLAY_BLUR__, __DEFAULT_GLASS_OVERLAY_IS_BACKDROP__ } from '../constants';
import type { GlassOverlayProps } from '../types';

type UseGlassOverlayClassesProps<Element extends ElementType> = Pick<GlassOverlayProps<Element>, 'blur' | 'isBackdrop'>;
type UseGlassOverlayClassesReturn = ClassName;

// TODO: Remove Get from all GetClasses hooks names
const useGlassOverlayClasses = <Element extends ElementType>(
	props: UseGlassOverlayClassesProps<Element>
): UseGlassOverlayClassesReturn => {
	const { blur = __DEFAULT_GLASS_OVERLAY_BLUR__, isBackdrop = __DEFAULT_GLASS_OVERLAY_IS_BACKDROP__ } = props;

	const backdropBlurClassName = useGetClass<BackdropBlurClass>(blur, ['filters', 'backdrop_blur']);
	const blurClassName = useGetClass<BackdropBlurClass>(blur, ['filters', 'blur']);
	const saturateClassName = useGetClass<SaturateClass>(100, ['filters', 'saturate']);

	return classNames('w-full', 'h-full', saturateClassName, {
		[backdropBlurClassName]: isBackdrop,
		[blurClassName]: !isBackdrop
	});
};

export default useGlassOverlayClasses;
