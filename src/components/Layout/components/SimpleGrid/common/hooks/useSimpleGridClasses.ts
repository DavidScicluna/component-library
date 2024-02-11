import classes from '@common/classes';
import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import { __DEFAULT_SIMPLE_GRID_COLUMNS__ } from '../constants';
import type { SimpleGridProps } from '../types';

import useSimpleGridResponsiveValues from './useSimpleGridResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseSimpleGridClassesProps<Element extends PolymorphicElementType> = Pick<
	SimpleGridProps<Element>,
	'columns' | 'spacing'
>;
type UseSimpleGridClassesReturn = ClassName;

const useSimpleGridClasses = <Element extends PolymorphicElementType>(
	props: UseSimpleGridClassesProps<Element>
): UseSimpleGridClassesReturn => {
	const { columns: columnsProp = __DEFAULT_SIMPLE_GRID_COLUMNS__, spacing: spacingProp = __DEFAULT_SPACING__ } =
		props;

	const { columns, spacing } = useSimpleGridResponsiveValues({ columns: columnsProp, spacing: spacingProp });

	const columnsClassName = useGetClass((classes) => classes.grid.template_columns[columns]);

	const spacingClassName = useGetClass((classes) => classes.spacing.gap[spacing]);

	return classNames(classes.layout.display.grid, columnsClassName, spacingClassName);
};

export default useSimpleGridClasses;
