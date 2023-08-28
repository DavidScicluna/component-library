import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { BackdropBlurClass, ClassName, SaturateClass } from '@common/types';

import { __DEFAULT_BACKDROP_OVERLAY_BLUR__ } from '../constants';
import type { BackdropOverlayElement, BackdropOverlayProps } from '../types';

type UseBackdropOverlayClassesProps<Element extends BackdropOverlayElement> = Pick<
	BackdropOverlayProps<Element>,
	'blur'
>;
type UseBackdropOverlayClassesReturn = ClassName;

const useBackdropOverlayClasses = <Element extends BackdropOverlayElement>(
	props: UseBackdropOverlayClassesProps<Element>
): UseBackdropOverlayClassesReturn => {
	const { blur = __DEFAULT_BACKDROP_OVERLAY_BLUR__ } = props;

	const backdropBlurClassName = useGetClass<BackdropBlurClass>(blur, ['filters', 'backdrop_blur']);
	const saturateClassName = useGetClass<SaturateClass>(100, ['filters', 'saturate']);

	return classNames({ [backdropBlurClassName]: !!blur, [saturateClassName]: !!blur });
};

export default useBackdropOverlayClasses;
