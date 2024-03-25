import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';

import { DEFAULT_ASPECT_RATIO_RATIO } from '../constants';
import type { AspectRatioUniqueProps } from '../types';

import useAspectRatioResponsiveValues from './useAspectRatioResponsiveValues';

type UseAspectRatioClassesProps = Pick<AspectRatioUniqueProps, 'ratio'>;
type UseAspectRatioClassesReturn = ClassName;

const useAspectRatioClasses = (props: UseAspectRatioClassesProps): UseAspectRatioClassesReturn => {
	const { ratio: ratioProp } = props;

	const { ratio = DEFAULT_ASPECT_RATIO_RATIO } = useAspectRatioResponsiveValues({ ratio: ratioProp });

	const ratioClassName = useGetClass((classes) => classes.layout.aspect_ratio[ratio]);

	return classNames(ratioClassName);
};

export default useAspectRatioClasses;
