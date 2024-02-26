import classNames from 'classnames';

import classes from '@common/classes';
import { DEFAULT_SPACING } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import { DEFAULT_SIMPLE_GRID_COLUMNS } from '../constants';
import type { SimpleGridProps } from '../types';

import useSimpleGridResponsiveValues from './useSimpleGridResponsiveValues';

type UseSimpleGridClassesProps<Element extends PolymorphicElementType> = Pick<
	SimpleGridProps<Element>,
	'columns' | 'spacing'
>;
type UseSimpleGridClassesReturn = ClassName;

const useSimpleGridClasses = <Element extends PolymorphicElementType>(
	props: UseSimpleGridClassesProps<Element>
): UseSimpleGridClassesReturn => {
	const { columns: columnsProp = DEFAULT_SIMPLE_GRID_COLUMNS, spacing: spacingProp = DEFAULT_SPACING } = props;

	const { columns, spacing } = useSimpleGridResponsiveValues({ columns: columnsProp, spacing: spacingProp });

	const columnsClassName = useGetClass((classes) => classes.grid.template_columns[columns]);

	const spacingClassName = useGetClass((classes) => classes.spacing.gap[spacing]);

	return classNames(classes.layout.display.grid, columnsClassName, spacingClassName);
};

export default useSimpleGridClasses;
