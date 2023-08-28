import type { ElementType } from 'react';

import classNames from 'classnames';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type {
	AlignContentClass,
	AlignItemsClass,
	ClassName,
	GridAutoClass,
	GridAutoFlowClass,
	JustifyContentClass,
	JustifyItemsClass,
	ThemeSpacing,
	Undefinable
} from '@common/types';

import {
	__DEFAULT_GRID_ALIGN_CONTENT__,
	__DEFAULT_GRID_ALIGN_ITEMS__,
	__DEFAULT_GRID_JUSTIFY_CONTENT__,
	__DEFAULT_GRID_JUSTIFY_ITEMS__,
	__DEFAULT_GRID_TEMPLATE_COLUMNS__,
	__DEFAULT_GRID_TEMPLATE_ROWS__
} from '../constants';
import type { GridProps, GridTemplateColumns, GridTemplateRows } from '../types';

type UseGridClassesProps<Element extends ElementType> = Pick<
	GridProps<Element>,
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
	| 'spacing'
>;
type UseGridClassesReturn = ClassName;

const useGridClasses = <Element extends ElementType>(props: UseGridClassesProps<Element>): UseGridClassesReturn => {
	const {
		alignContent = __DEFAULT_GRID_ALIGN_CONTENT__,
		alignItems = __DEFAULT_GRID_ALIGN_ITEMS__,
		autoColumns,
		autoFlow,
		autoRows,
		columnSpacing,
		justifyContent = __DEFAULT_GRID_JUSTIFY_CONTENT__,
		justifyItems = __DEFAULT_GRID_JUSTIFY_ITEMS__,
		rowSpacing,
		templateColumns = __DEFAULT_GRID_TEMPLATE_COLUMNS__,
		templateRows = __DEFAULT_GRID_TEMPLATE_ROWS__,
		spacing = __DEFAULT_SPACING__
	} = props;

	const autoColumnsClassName = useGetClass<Undefinable<GridAutoClass>>(autoColumns, ['grid', 'auto_columns']);
	const autoFlowClassName = useGetClass<Undefinable<GridAutoFlowClass>>(autoFlow, ['grid', 'auto_flow']);
	const autoRowsClassName = useGetClass<Undefinable<GridAutoClass>>(autoRows, ['grid', 'auto_rows']);

	const alignContentClassName = useGetClass<AlignContentClass>(alignContent, ['grid', 'align_content']);
	const alignItemsClassName = useGetClass<AlignItemsClass>(alignItems, ['grid', 'align_items']);

	const justifyContentClassName = useGetClass<JustifyContentClass>(justifyContent, ['grid', 'justify_content']);
	const justifyItemsClassName = useGetClass<JustifyItemsClass>(justifyItems, ['grid', 'justify_items']);

	const columnSpacingClassName = useGetClass<Undefinable<ThemeSpacing>>(columnSpacing, ['spacing', 'gap_y']);
	const rowSpacingClassName = useGetClass<Undefinable<ThemeSpacing>>(rowSpacing, ['spacing', 'gap_x']);

	const templateColumnsClassName = useGetClass<Undefinable<GridTemplateColumns>>(
		typeof templateColumns === 'number' ? templateColumns : __DEFAULT_GRID_TEMPLATE_COLUMNS__,
		['grid', 'template_columns']
	);
	const templateRowsClassName = useGetClass<Undefinable<GridTemplateRows>>(
		typeof templateRows === 'number' ? templateRows : __DEFAULT_GRID_TEMPLATE_ROWS__,
		['grid', 'template_rows']
	);

	const spacingClassName = useGetClass<ThemeSpacing>(spacing, ['spacing', 'gap']);

	return classNames(
		'grid',
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
