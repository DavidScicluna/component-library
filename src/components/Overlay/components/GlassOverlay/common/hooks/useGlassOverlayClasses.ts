import type { ElementType } from 'react';

import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';
import type { Saturate } from '@common/types/classes';

import { __DEFAULT_GLASS_OVERLAY_BLUR__, __DEFAULT_GLASS_OVERLAY_IS_BACKDROP__ } from '../constants';
import type { GlassOverlayBlur, GlassOverlayProps } from '../types';

type UseGlassOverlayClassesProps<Element extends ElementType> = Pick<GlassOverlayProps<Element>, 'blur' | 'isBackdrop'>;
type UseGlassOverlayClassesReturn = ClassName;

// TODO: Remove Get from all GetClasses hooks names
const useGlassOverlayClasses = <Element extends ElementType>(
	props: UseGlassOverlayClassesProps<Element>
): UseGlassOverlayClassesReturn => {
	const { blur = __DEFAULT_GLASS_OVERLAY_BLUR__, isBackdrop = __DEFAULT_GLASS_OVERLAY_IS_BACKDROP__ } = props;

	const backdropBlurClassName = useGetClass<GlassOverlayBlur>(blur, ['filters', 'backdrop_blur']);
	const blurClassName = useGetClass<GlassOverlayBlur>(blur, ['filters', 'blur']);
	const saturateClassName = useGetClass<Saturate>(100, ['filters', 'saturate']);

	return classNames('w-full', 'h-full', saturateClassName, {
		[backdropBlurClassName]: isBackdrop,
		[blurClassName]: !isBackdrop
	});
};

export default useGlassOverlayClasses;
