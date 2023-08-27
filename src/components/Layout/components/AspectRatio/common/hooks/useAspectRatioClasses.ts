import type { ElementType } from 'react';

import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';
import type { AspectRatio } from '@common/types/theme';

import { __DEFAULT_ASPECT_RATIO_RATIO__ } from '../constants';
import type { AspectRatioProps } from '../types';

type UseAspectRatioClassesProps<Element extends ElementType> = Pick<AspectRatioProps<Element>, 'ratio'>;
type UseAspectRatioClassesReturn = ClassName;

const useAspectRatioClasses = <Element extends ElementType>(
	props: UseAspectRatioClassesProps<Element>
): UseAspectRatioClassesReturn => {
	const { ratio = __DEFAULT_ASPECT_RATIO_RATIO__ } = props;

	const ratioClassName = useGetClass<AspectRatio>(ratio, ['layout', 'aspect_ratio']);

	return classNames(ratioClassName);
};

export default useAspectRatioClasses;
