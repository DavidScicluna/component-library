import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicDefaultElement, PolymorphicElementType, ThemeAspectRatio } from '@common/types';

import { __DEFAULT_ASPECT_RATIO_RATIO__ } from '../constants';
import type { AspectRatioProps } from '../types';

import useAspectRatioResponsiveValues from './useAspectRatioResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseAspectRatioClassesProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Pick<
	AspectRatioProps<Element>,
	'ratio'
>;
type UseAspectRatioClassesReturn = ClassName;

const useAspectRatioClasses = <Element extends PolymorphicElementType = PolymorphicDefaultElement>(
	props: UseAspectRatioClassesProps<Element>
): UseAspectRatioClassesReturn => {
	const { ratio: ratioProp = __DEFAULT_ASPECT_RATIO_RATIO__ } = props;

	const { ratio } = useAspectRatioResponsiveValues<Element>({ ratio: ratioProp });

	const ratioClassName = useGetClass<ThemeAspectRatio>(ratio, ['layout', 'aspect_ratio']);

	return classNames(ratioClassName);
};

export default useAspectRatioClasses;
