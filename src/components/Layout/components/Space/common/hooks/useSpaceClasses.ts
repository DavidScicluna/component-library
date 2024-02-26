import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import { DEFAULT_SPACE_HEIGHT, DEFAULT_SPACE_WIDTH } from '../constants';
import type { SpaceProps } from '../types';

import useSpaceResponsiveValues from './useSpaceResponsiveValues';

type UseSpaceClassesProps<Element extends PolymorphicElementType> = Pick<SpaceProps<Element>, 'width' | 'height'>;
type UseSpaceClassesReturn = ClassName;

const useSpaceClasses = <Element extends PolymorphicElementType>(
	props: UseSpaceClassesProps<Element>
): UseSpaceClassesReturn => {
	const { width: widthProp = DEFAULT_SPACE_WIDTH, height: heightProp = DEFAULT_SPACE_HEIGHT } = props;

	const { width, height } = useSpaceResponsiveValues({ width: widthProp, height: heightProp });

	const widthClassName = useGetClass((classes) => classes.sizing.width[width]);
	const heightClassName = useGetClass((classes) => classes.sizing.height[height]);

	return classNames({
		[widthClassName]: !!width,
		[heightClassName]: !!height
	});
};

export default useSpaceClasses;
