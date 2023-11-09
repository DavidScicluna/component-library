import type { ElementType } from 'react';

import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicDefaultElement, ThemeSpacing } from '@common/types';

import { __DEFAULT_SPACE_HEIGHT__, __DEFAULT_SPACE_WIDTH__ } from '../constants';
import type { SpaceProps } from '../types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseSpaceClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	SpaceProps<Element>,
	'width' | 'height'
>;
type UseSpaceClassesReturn = ClassName;

const useSpaceClasses = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseSpaceClassesProps<Element>
): UseSpaceClassesReturn => {
	const { width = __DEFAULT_SPACE_WIDTH__, height = __DEFAULT_SPACE_HEIGHT__ } = props;

	const widthClassName = useGetClass<ThemeSpacing>(width, ['sizing', 'width']);
	const heightClassName = useGetClass<ThemeSpacing>(height, ['sizing', 'height']);

	return classNames({
		[widthClassName]: !!width,
		[heightClassName]: !!height
	});
};

export default useSpaceClasses;
