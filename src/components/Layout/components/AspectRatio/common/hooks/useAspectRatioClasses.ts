import type { ElementType } from 'react';

import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicDefaultElement, ThemeAspectRatio } from '@common/types';

import { __DEFAULT_ASPECT_RATIO_RATIO__ } from '../constants';
import type { AspectRatioProps } from '../types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseAspectRatioClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	AspectRatioProps<Element>,
	'ratio'
>;
type UseAspectRatioClassesReturn = ClassName;

const useAspectRatioClasses = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseAspectRatioClassesProps<Element>
): UseAspectRatioClassesReturn => {
	const { ratio = __DEFAULT_ASPECT_RATIO_RATIO__ } = props;

	const ratioClassName = useGetClass<ThemeAspectRatio>(ratio, ['layout', 'aspect_ratio']);

	return classNames(ratioClassName);
};

export default useAspectRatioClasses;
