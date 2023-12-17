import { useGetClass } from '@common/hooks';
import type { ClassName, ThemeSpacing } from '@common/types';

import { __DEFAULT_SPACE_HEIGHT__, __DEFAULT_SPACE_WIDTH__ } from '../constants';
import type { SpaceProps } from '../types';

import useSpaceResponsiveValues from './useSpaceResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseSpaceClassesProps = Pick<SpaceProps, 'width' | 'height'>;
type UseSpaceClassesReturn = ClassName;

const useSpaceClasses = (props: UseSpaceClassesProps): UseSpaceClassesReturn => {
	const { width: widthProp = __DEFAULT_SPACE_WIDTH__, height: heightProp = __DEFAULT_SPACE_HEIGHT__ } = props;

	const { width, height } = useSpaceResponsiveValues({ width: widthProp, height: heightProp });

	const widthClassName = useGetClass<ThemeSpacing>(width, ['sizing', 'width']);
	const heightClassName = useGetClass<ThemeSpacing>(height, ['sizing', 'height']);

	return classNames({
		[widthClassName]: !!width,
		[heightClassName]: !!height
	});
};

export default useSpaceClasses;
