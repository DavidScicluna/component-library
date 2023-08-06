import type { ElementType } from 'react';

import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';
import type { Saturate } from '@common/types/classes';

import { __DEFAULT_GLASS_BLUR__, __DEFAULT_GLASS_IS_BACKDROP__ } from '../constants';
import type { GlassBlur, GlassProps } from '../types';

type UseGetGlassClassesProps<Element extends ElementType> = Pick<GlassProps<Element>, 'blur' | 'isBackdrop'>;
type UseGetGlassClassesReturn = ClassName;

const useGetGlassClasses = <Element extends ElementType>(
	props: UseGetGlassClassesProps<Element>
): UseGetGlassClassesReturn => {
	const { blur = __DEFAULT_GLASS_BLUR__, isBackdrop = __DEFAULT_GLASS_IS_BACKDROP__ } = props;

	const backdropBlurClassName = useGetClass<GlassBlur>(blur, ['filters', 'backdropBlur']);
	const blurClassName = useGetClass<GlassBlur>(blur, ['filters', 'blur']);
	const saturateClassName = useGetClass<Saturate>(100, ['filters', 'saturate']);

	return classNames('w-full', 'h-full', saturateClassName, {
		[backdropBlurClassName]: isBackdrop,
		[blurClassName]: !isBackdrop
	});
};

export default useGetGlassClasses;
