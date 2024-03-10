import classNames from 'classnames';

import classes from '@common/classes';
import { DEFAULT_SPACING } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import {
	DEFAULT_GRID_ALIGN_CONTENT,
	DEFAULT_GRID_ALIGN_ITEMS,
	DEFAULT_GRID_JUSTIFY_CONTENT,
	DEFAULT_GRID_JUSTIFY_ITEMS,
	DEFAULT_GRID_TEMPLATE_COLUMNS,
	DEFAULT_GRID_TEMPLATE_ROWS
} from '../constants';
import type { GridProps } from '../types';

import useGridResponsiveValues from './useGridResponsiveValues';

type PickedGridProps =
	| 'alignContent'
	| 'alignItems'
	| 'autoColumns'
	| 'autoFlow'
	| 'autoRows'
	| 'columnSpacing'
	| 'justifyContent'
	| 'justifyItems'
	| 'rowSpacing'
	| 'templateColumns'
	| 'templateRows'
	| 'spacing';
type UseGridClassesProps<Element extends PolymorphicElementType> = Pick<GridProps<Element>, PickedGridProps>;
type UseGridClassesReturn = ClassName;

const useGridClasses = <Element extends PolymorphicElementType>(
	props: UseGridClassesProps<Element>
): UseGridClassesReturn => {
	const {
		alignContent: alignContentProp,
		alignItems: alignItemsProp,
		autoColumns: autoColumnsProp,
		autoFlow: autoFlowProp,
		autoRows: autoRowsProp,
		columnSpacing: columnSpacingProp,
		justifyContent: justifyContentProp,
		justifyItems: justifyItemsProp,
		rowSpacing: rowSpacingProp,
		templateColumns: templateColumnsProp,
		templateRows: templateRowsProp,
		spacing: spacingProp
	} = props;

	const {
		alignContent = DEFAULT_GRID_ALIGN_CONTENT,
		alignItems = DEFAULT_GRID_ALIGN_ITEMS,
		autoColumns,
		autoFlow,
		autoRows,
		columnSpacing,
		justifyContent = DEFAULT_GRID_JUSTIFY_CONTENT,
		justifyItems = DEFAULT_GRID_JUSTIFY_ITEMS,
		rowSpacing,
		templateColumns = DEFAULT_GRID_TEMPLATE_COLUMNS,
		templateRows = DEFAULT_GRID_TEMPLATE_ROWS,
		spacing = DEFAULT_SPACING
	} = useGridResponsiveValues({
		alignContent: alignContentProp,
		alignItems: alignItemsProp,
		autoColumns: autoColumnsProp,
		autoFlow: autoFlowProp,
		autoRows: autoRowsProp,
		columnSpacing: columnSpacingProp,
		justifyContent: justifyContentProp,
		justifyItems: justifyItemsProp,
		rowSpacing: rowSpacingProp,
		templateColumns: templateColumnsProp,
		templateRows: templateRowsProp,
		spacing: spacingProp
	});

	const autoColumnsClassName = useGetClass((classes) => (autoColumns ? classes.grid.auto_columns[autoColumns] : ''));
	const autoFlowClassName = useGetClass((classes) => (autoFlow ? classes.grid.auto_flow[autoFlow] : ''));
	const autoRowsClassName = useGetClass((classes) => (autoRows ? classes.grid.auto_rows[autoRows] : ''));

	const alignContentClassName = useGetClass((classes) => classes.grid.align_content[alignContent]);
	const alignItemsClassName = useGetClass((classes) => classes.grid.align_items[alignItems]);

	const justifyContentClassName = useGetClass((classes) => classes.grid.justify_content[justifyContent]);
	const justifyItemsClassName = useGetClass((classes) => classes.grid.justify_items[justifyItems]);

	const columnSpacingClassName = useGetClass((classes) =>
		columnSpacing ? classes.spacing.gap_y[columnSpacing] : ''
	);
	const rowSpacingClassName = useGetClass((classes) => (rowSpacing ? classes.spacing.gap_x[rowSpacing] : ''));

	const templateColumnsClassName = useGetClass(
		(classes) =>
			classes.grid.template_columns[
				typeof templateColumns === 'number' ? templateColumns : DEFAULT_GRID_TEMPLATE_COLUMNS
			]
	);
	const templateRowsClassName = useGetClass(
		(classes) =>
			classes.grid.template_rows[typeof templateRows === 'number' ? templateRows : DEFAULT_GRID_TEMPLATE_ROWS]
	);

	const spacingClassName = useGetClass((classes) => classes.spacing.gap[spacing]);

	return classNames(
		classes.layout.display.grid,
		alignContentClassName,
		alignItemsClassName,
		justifyContentClassName,
		justifyItemsClassName,
		autoColumnsClassName,
		autoFlowClassName,
		autoRowsClassName,
		columnSpacingClassName,
		rowSpacingClassName,
		{
			[templateColumnsClassName]: typeof templateColumns !== 'string',
			[templateRowsClassName]: typeof templateRows !== 'string',
			[spacingClassName]: !columnSpacing && !rowSpacing
		}
	);
};

export default useGridClasses;
