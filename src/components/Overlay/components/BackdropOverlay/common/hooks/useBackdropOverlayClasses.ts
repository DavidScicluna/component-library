import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';
import type { Saturate } from '@common/types/classes';

import { __DEFAULT_BACKDROP_OVERLAY_BLUR__ } from '../constants';
import type { BackdropOverlayBlur, BackdropOverlayElement, BackdropOverlayProps } from '../types';

type UseBackdropOverlayClassesProps<Element extends BackdropOverlayElement> = Pick<
	BackdropOverlayProps<Element>,
	'blur'
>;
type UseBackdropOverlayClassesReturn = ClassName;

const useBackdropOverlayClasses = <Element extends BackdropOverlayElement>(
	props: UseBackdropOverlayClassesProps<Element>
): UseBackdropOverlayClassesReturn => {
	const { blur = __DEFAULT_BACKDROP_OVERLAY_BLUR__ } = props;

	const backdropBlurClassName = useGetClass<BackdropOverlayBlur>(blur, ['filters', 'backdrop_blur']);
	const saturateClassName = useGetClass<Saturate>(100, ['filters', 'saturate']);

	return classNames({ [backdropBlurClassName]: !!blur, [saturateClassName]: !!blur });
};

export default useBackdropOverlayClasses;
