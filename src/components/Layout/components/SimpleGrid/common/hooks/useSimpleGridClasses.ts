import classNames from 'classnames';

import classes from '@common/classes';
import { DEFAULT_SPACING } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';

import { DEFAULT_SIMPLE_GRID_COLUMNS } from '../constants';
import type { SimpleGridUniqueProps } from '../types';

import useSimpleGridResponsiveValues from './useSimpleGridResponsiveValues';

type UseSimpleGridClassesProps = Pick<SimpleGridUniqueProps, 'columns' | 'spacing'>;
type UseSimpleGridClassesReturn = ClassName;

const useSimpleGridClasses = (props: UseSimpleGridClassesProps): UseSimpleGridClassesReturn => {
	const { columns: columnsProp, spacing: spacingProp } = props;

	const { columns = DEFAULT_SIMPLE_GRID_COLUMNS, spacing = DEFAULT_SPACING } = useSimpleGridResponsiveValues({
		columns: columnsProp,
		spacing: spacingProp
	});

	const columnsClassName = useGetClass((classes) => classes.grid.template_columns[columns]);

	const spacingClassName = useGetClass((classes) => classes.spacing.gap[spacing]);

	return classNames(classes.layout.display.grid, columnsClassName, spacingClassName);
};

export default useSimpleGridClasses;
