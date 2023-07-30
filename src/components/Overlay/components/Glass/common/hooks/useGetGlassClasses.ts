import type { ElementType } from 'react';

import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';
import type { Saturate } from '@common/types/classes';

import { __DEFAULT_GLASS_BLUR__ } from '../constants';
import type { GlassBlur, GlassProps } from '../types';

type UseGetGlassClassesProps<Element extends ElementType> = Pick<GlassProps<Element>, 'blur'>;
type UseGetGlassClassesReturn = ClassName;

const useGetGlassClasses = <Element extends ElementType>(
	props: UseGetGlassClassesProps<Element>
): UseGetGlassClassesReturn => {
	const { blur = __DEFAULT_GLASS_BLUR__ } = props;

	const backdropBlurClassName = useGetClass<GlassBlur>(blur, ['filters', 'backdropBlur']);
	const saturateClassName = useGetClass<Saturate>(100, ['filters', 'saturate']);

	return classNames('w-full', 'h-full', backdropBlurClassName, saturateClassName);
};

export default useGetGlassClasses;
