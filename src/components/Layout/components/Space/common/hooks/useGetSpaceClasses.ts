import type { ElementType } from 'react';

import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName, ThemeSpacing } from '@common/types';

import { __DEFAULT_SPACE_HEIGHT__, __DEFAULT_SPACE_WIDTH__ } from '../constants';
import type { SpaceProps } from '../types';

type UseGetSpaceClassesProps<Element extends ElementType> = Pick<SpaceProps<Element>, 'width' | 'height'>;
type UseGetSpaceClassesReturn = ClassName;

const useGetSpaceClasses = <Element extends ElementType>(
	props: UseGetSpaceClassesProps<Element>
): UseGetSpaceClassesReturn => {
	const { width = __DEFAULT_SPACE_WIDTH__, height = __DEFAULT_SPACE_HEIGHT__ } = props;

	const widthClassName = useGetClass<ThemeSpacing>(width, ['sizing', 'width']);
	const heightClassName = useGetClass<ThemeSpacing>(height, ['sizing', 'height']);

	return classNames({
		[widthClassName]: !!width,
		[heightClassName]: !!height
	});
};

export default useGetSpaceClasses;
