import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';
import type { Saturate } from '@common/types/classes';

import { __DEFAULT_BACKDROP_OVERLAY_BLUR__ } from '../constants';
import type { BackdropOverlayBlur, BackdropOverlayElement, BackdropOverlayProps } from '../types';

type UseGetBackdropOverlayClassesProps<Element extends BackdropOverlayElement> = Pick<
	BackdropOverlayProps<Element>,
	'blur'
>;
type UseGetBackdropOverlayClassesReturn = ClassName;

const useGetBackdropOverlayClasses = <Element extends BackdropOverlayElement>(
	props: UseGetBackdropOverlayClassesProps<Element>
): UseGetBackdropOverlayClassesReturn => {
	const { blur = __DEFAULT_BACKDROP_OVERLAY_BLUR__ } = props;

	const backdropBlurClassName = useGetClass<BackdropOverlayBlur>(blur, ['filters', 'backdropBlur']);
	const saturateClassName = useGetClass<Saturate>(100, ['filters', 'saturate']);

	return classNames('w-full', 'h-full', {
		[backdropBlurClassName]: !!blur,
		[saturateClassName]: !!blur
	});
};

export default useGetBackdropOverlayClasses;
