import { ElementType, forwardRef, ReactElement } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { Undefinable } from '@common/types';
import type {
	AlignContent,
	AlignItems,
	GridAuto,
	GridAutoFlow,
	GridTemplateColumns,
	GridTemplateRows,
	JustifyContent,
	JustifyItems
} from '@common/types/classes';
import type { Space } from '@common/types/theme';

import Box from '../../Box';

import {
	__DEFAULT_GRID_ALIGN_CONTENT__,
	__DEFAULT_GRID_ALIGN_ITEMS__,
	__DEFAULT_GRID_JUSTIFY_CONTENT__,
	__DEFAULT_GRID_JUSTIFY_ITEMS__,
	__DEFAULT_GRID_TEMPLATE_COLUMNS__,
	__DEFAULT_GRID_TEMPLATE_ROWS__
} from './common/constants';
import type { GridProps, GridRef } from './common/types';

const Grid = forwardRef(function Grid<Element extends ElementType>(
	props: GridProps<Element>,
	ref: GridRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
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
		spacing = __DEFAULT_SPACING__,
		...rest
	} = props;

	const autoColumnsClassName = useGetClass<Undefinable<GridAuto>>(autoColumns, ['grid', 'autoColumns']);
	const autoFlowClassName = useGetClass<Undefinable<GridAutoFlow>>(autoFlow, ['grid', 'autoFlow']);
	const autoRowsClassName = useGetClass<Undefinable<GridAuto>>(autoRows, ['grid', 'autoRows']);

	const alignContentClassName = useGetClass<AlignContent>(alignContent, ['grid', 'alignContent']);
	const alignItemsClassName = useGetClass<AlignItems>(alignItems, ['grid', 'alignItems']);

	const justifyContentClassName = useGetClass<JustifyContent>(justifyContent, ['grid', 'justifyContent']);
	const justifyItemsClassName = useGetClass<JustifyItems>(justifyItems, ['grid', 'justifyItems']);

	const columnSpacingClassName = useGetClass<Undefinable<Space>>(columnSpacing, ['spacing', 'gapY']);
	const rowSpacingClassName = useGetClass<Undefinable<Space>>(rowSpacing, ['spacing', 'gapX']);

	const templateColumnsClassName = useGetClass<Undefinable<GridTemplateColumns>>(templateColumns, [
		'grid',
		'templateColumns'
	]);
	const templateRowsClassName = useGetClass<Undefinable<GridTemplateRows>>(templateRows, ['grid', 'templateColumns']);

	const spacingClassName = useGetClass<Space>(spacing, ['spacing', 'gap']);

	return (
		<Box
			{...(rest as GridProps<Element>)}
			ref={ref}
			className={classNames(
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
				templateColumnsClassName,
				templateRowsClassName,
				{
					[spacingClassName]: !columnSpacing && !rowSpacing,
					[className]: !!className
				}
			)}
		>
			{children}
		</Box>
	);
});

export default Grid;
