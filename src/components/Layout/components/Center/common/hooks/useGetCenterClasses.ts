import type { ElementType } from 'react';

import classNames from 'classnames';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';
import type { Space } from '@common/types/theme';

import type { CenterProps } from '../types';

type UseGetCenterClassesProps<Element extends ElementType> = Pick<CenterProps<Element>, 'spacing'>;
type UseGetCenterClassesReturn = ClassName;

const useGetCenterClasses = <Element extends ElementType>(
	props: UseGetCenterClassesProps<Element>
): UseGetCenterClassesReturn => {
	const { spacing = __DEFAULT_SPACING__ } = props;

	const spacingClassName = useGetClass<Space>(spacing, ['spacing', 'gap']);

	return classNames('flex', 'flex-row', 'flex-nowrap', 'items-center', 'justify-center', spacingClassName);
};

export default useGetCenterClasses;
