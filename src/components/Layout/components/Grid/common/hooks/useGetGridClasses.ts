import type { ElementType } from 'react';

import classNames from 'classnames';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { ClassName, Undefinable } from '@common/types';
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

import {
	__DEFAULT_GRID_ALIGN_CONTENT__,
	__DEFAULT_GRID_ALIGN_ITEMS__,
	__DEFAULT_GRID_JUSTIFY_CONTENT__,
	__DEFAULT_GRID_JUSTIFY_ITEMS__,
	__DEFAULT_GRID_TEMPLATE_COLUMNS__,
	__DEFAULT_GRID_TEMPLATE_ROWS__
} from '../constants';
import type { GridProps } from '../types';

type UseGetGridClassesProps<Element extends ElementType> = Pick<
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
type UseGetGridClassesReturn = ClassName;

const useGetGridClasses = <Element extends ElementType>(
	props: UseGetGridClassesProps<Element>
): UseGetGridClassesReturn => {
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
		templateColumnsClassName,
		templateRowsClassName,
		{ [spacingClassName]: !columnSpacing && !rowSpacing }
	);
};

export default useGetGridClasses;
