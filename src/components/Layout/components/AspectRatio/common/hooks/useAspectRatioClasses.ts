import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import { DEFAULT_ASPECT_RATIO_RATIO } from '../constants';
import type { AspectRatioProps } from '../types';

import useAspectRatioResponsiveValues from './useAspectRatioResponsiveValues';

type UseAspectRatioClassesProps<Element extends PolymorphicElementType> = Pick<AspectRatioProps<Element>, 'ratio'>;
type UseAspectRatioClassesReturn = ClassName;

const useAspectRatioClasses = <Element extends PolymorphicElementType>(
	props: UseAspectRatioClassesProps<Element>
): UseAspectRatioClassesReturn => {
	const { ratio: ratioProp = DEFAULT_ASPECT_RATIO_RATIO } = props;

	const { ratio } = useAspectRatioResponsiveValues({ ratio: ratioProp });

	const ratioClassName = useGetClass((classes) => classes.layout.aspect_ratio[ratio]);

	return classNames(ratioClassName);
};

export default useAspectRatioClasses;
