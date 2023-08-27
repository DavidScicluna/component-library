import type { ElementType } from 'react';

import classNames from 'classnames';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';
import type { Space } from '@common/types/theme';

import type { SimpleGridColumn, SimpleGridProps } from '../types';

type UseSimpleGridClassesProps<Element extends ElementType> = Pick<SimpleGridProps<Element>, 'columns' | 'spacing'>;
type UseSimpleGridClassesReturn = ClassName;

const useSimpleGridClasses = <Element extends ElementType>(
	props: UseSimpleGridClassesProps<Element>
): UseSimpleGridClassesReturn => {
	const { columns, spacing = __DEFAULT_SPACING__ } = props;

	const columnsClassName = useGetClass<SimpleGridColumn>(columns, ['grid', 'template_columns']);

	const spacingClassName = useGetClass<Space>(spacing, ['spacing', 'gap']);

	return classNames('grid', columnsClassName, spacingClassName);
};

export default useSimpleGridClasses;
