import type { ElementType } from 'react';

import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { BackdropBlurClass, ClassName, SaturateClass } from '@common/types';

import { __DEFAULT_BACKDROP_OVERLAY_BLUR__, __DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE__ } from '../constants';
import type { BackdropOverlayProps } from '../types';

type UseBackdropOverlayClassesProps<Element extends ElementType> = Pick<
	BackdropOverlayProps<Element>,
	'blur' | 'blurType'
>;
type UseBackdropOverlayClassesReturn = ClassName;

const useBackdropOverlayClasses = <Element extends ElementType>(
	props: UseBackdropOverlayClassesProps<Element>
): UseBackdropOverlayClassesReturn => {
	const { blur = __DEFAULT_BACKDROP_OVERLAY_BLUR__, blurType = __DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE__ } = props;

	const backdropBlurClassName = useGetClass<BackdropBlurClass>(blur, ['filters', 'backdrop_blur']);
	const blurClassName = useGetClass<BackdropBlurClass>(blur, ['filters', 'blur']);
	const saturateClassName = useGetClass<SaturateClass>(100, ['filters', 'saturate']);

	return classNames({
		[saturateClassName]: blur !== 'none',
		[backdropBlurClassName]: blur !== 'none' && blurType === 'backdrop',
		[blurClassName]: blur !== 'none' && blurType === 'blur'
	});
};

export default useBackdropOverlayClasses;
