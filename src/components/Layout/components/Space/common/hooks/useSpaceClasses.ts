import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import { __DEFAULT_SPACE_HEIGHT__, __DEFAULT_SPACE_WIDTH__ } from '../constants';
import type { SpaceProps } from '../types';

import useSpaceResponsiveValues from './useSpaceResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseSpaceClassesProps<Element extends PolymorphicElementType> = Pick<SpaceProps<Element>, 'width' | 'height'>;
type UseSpaceClassesReturn = ClassName;

const useSpaceClasses = <Element extends PolymorphicElementType>(
	props: UseSpaceClassesProps<Element>
): UseSpaceClassesReturn => {
	const { width: widthProp = __DEFAULT_SPACE_WIDTH__, height: heightProp = __DEFAULT_SPACE_HEIGHT__ } = props;

	const { width, height } = useSpaceResponsiveValues({ width: widthProp, height: heightProp });

	const widthClassName = useGetClass((classes) => classes.sizing.width[width]);
	const heightClassName = useGetClass((classes) => classes.sizing.height[height]);

	return classNames({
		[widthClassName]: !!width,
		[heightClassName]: !!height
	});
};

export default useSpaceClasses;
