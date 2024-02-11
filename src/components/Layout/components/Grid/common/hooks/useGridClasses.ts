import classes from '@common/classes';
import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import {
	__DEFAULT_GRID_ALIGN_CONTENT__,
	__DEFAULT_GRID_ALIGN_ITEMS__,
	__DEFAULT_GRID_JUSTIFY_CONTENT__,
	__DEFAULT_GRID_JUSTIFY_ITEMS__,
	__DEFAULT_GRID_TEMPLATE_COLUMNS__,
	__DEFAULT_GRID_TEMPLATE_ROWS__
} from '../constants';
import type { GridProps } from '../types';

import useGridResponsiveValues from './useGridResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

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
		alignContent: alignContentProp = __DEFAULT_GRID_ALIGN_CONTENT__,
		alignItems: alignItemsProp = __DEFAULT_GRID_ALIGN_ITEMS__,
		autoColumns: autoColumnsProp,
		autoFlow: autoFlowProp,
		autoRows: autoRowsProp,
		columnSpacing: columnSpacingProp,
		justifyContent: justifyContentProp = __DEFAULT_GRID_JUSTIFY_CONTENT__,
		justifyItems: justifyItemsProp = __DEFAULT_GRID_JUSTIFY_ITEMS__,
		rowSpacing: rowSpacingProp,
		templateColumns: templateColumnsProp = __DEFAULT_GRID_TEMPLATE_COLUMNS__,
		templateRows: templateRowsProp = __DEFAULT_GRID_TEMPLATE_ROWS__,
		spacing: spacingProp = __DEFAULT_SPACING__
	} = props;

	const {
		alignContent,
		alignItems,
		autoColumns,
		autoFlow,
		autoRows,
		columnSpacing,
		justifyContent,
		justifyItems,
		rowSpacing,
		templateColumns,
		templateRows,
		spacing = __DEFAULT_SPACING__
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
				typeof templateColumns === 'number' ? templateColumns : __DEFAULT_GRID_TEMPLATE_COLUMNS__
			]
	);
	const templateRowsClassName = useGetClass(
		(classes) =>
			classes.grid.template_rows[typeof templateRows === 'number' ? templateRows : __DEFAULT_GRID_TEMPLATE_ROWS__]
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
