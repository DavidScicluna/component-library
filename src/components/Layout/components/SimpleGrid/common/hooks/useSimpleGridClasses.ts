import type { ElementType } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { ClassName, ThemeSpacing } from '@common/types';

import type { SimpleGridColumn, SimpleGridProps } from '../types';

type UseSimpleGridClassesProps<Element extends ElementType> = Pick<SimpleGridProps<Element>, 'columns' | 'spacing'>;
type UseSimpleGridClassesReturn = ClassName;

const useSimpleGridClasses = <Element extends ElementType>(
	props: UseSimpleGridClassesProps<Element>
): UseSimpleGridClassesReturn => {
	const { columns, spacing = __DEFAULT_SPACING__ } = props;

	const columnsClassName = useGetClass<SimpleGridColumn>(columns, ['grid', 'template_columns']);

	const spacingClassName = useGetClass<ThemeSpacing>(spacing, ['spacing', 'gap']);

	return classNames(classes.layout.display.grid, columnsClassName, spacingClassName);
};

export default useSimpleGridClasses;
