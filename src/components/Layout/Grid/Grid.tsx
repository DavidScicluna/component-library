import { ElementType, forwardRef, ReactElement, useMemo } from 'react';

import classNames from 'classnames';

import classes from '../../../common/classes';
import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '../../../common/constants';
import { useGetResponsiveValue } from '../../../common/hooks';
import type { Undefinable } from '../../../common/types';
import {
	AlignContent,
	AlignItems,
	GridAuto,
	GridAutoFlow,
	GridTemplateColumns,
	GridTemplateRows,
	JustifyContent,
	JustifyItems
} from '../../../common/types/classes';
import type { Space } from '../../../common/types/theme';
import { getResponsiveValue } from '../../../common/utils';
import Box from '../Box';

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
		alignContent: ac = __DEFAULT_GRID_ALIGN_CONTENT__,
		alignItems: ai = __DEFAULT_GRID_ALIGN_ITEMS__,
		autoColumns,
		autoFlow,
		autoRows,
		columnSpacing,
		justifyContent: jc = __DEFAULT_GRID_JUSTIFY_CONTENT__,
		justifyItems: ji = __DEFAULT_GRID_JUSTIFY_ITEMS__,
		rowSpacing,
		templateColumns = __DEFAULT_GRID_TEMPLATE_COLUMNS__,
		templateRows = __DEFAULT_GRID_TEMPLATE_ROWS__,
		spacing: s = __DEFAULT_SPACING__,
		...rest
	} = props;

	const alignContent = useGetResponsiveValue<AlignContent>(ac);
	const alignItems = useGetResponsiveValue<AlignItems>(ai);
	const justifyContent = useGetResponsiveValue<JustifyContent>(jc);
	const justifyItems = useGetResponsiveValue<JustifyItems>(ji);

	const autoColumnsClassName = useMemo<string>(() => {
		const ac = getResponsiveValue<Undefinable<GridAuto>>(autoColumns);
		return ac ? classes.grid.autoColumns[ac] : '';
	}, [autoColumns]);
	const autoFlowClassName = useMemo<string>(() => {
		const af = getResponsiveValue<Undefinable<GridAutoFlow>>(autoFlow);
		return af ? classes.grid.autoFlow[af] : '';
	}, [autoFlow]);
	const autoRowsClassName = useMemo<string>(() => {
		const ar = getResponsiveValue<Undefinable<GridAuto>>(autoRows);
		return ar ? classes.grid.autoRows[ar] : '';
	}, [autoRows]);
	const columnSpacingClassName = useMemo<string>(() => {
		const cs = getResponsiveValue<Undefinable<Space>>(columnSpacing);
		return cs ? classes.spacing.gapY[cs] : '';
	}, [columnSpacing]);
	const rowSpacingClassName = useMemo<string>(() => {
		const rs = getResponsiveValue<Undefinable<Space>>(rowSpacing);
		return rs ? classes.spacing.gapX[rs] : '';
	}, [rowSpacing]);
	const templateColumnsClassName = useMemo<string>(() => {
		const tc = getResponsiveValue<Undefinable<GridTemplateColumns>>(templateColumns);
		return tc ? classes.grid.templateColumns[tc] : '';
	}, [templateColumns]);
	const templateRowsClassName = useMemo<string>(() => {
		const tr = getResponsiveValue<Undefinable<GridTemplateRows>>(templateRows);
		return tr ? classes.grid.templateColumns[tr] : '';
	}, [templateRows]);

	const spacing = useGetResponsiveValue<Space>(s);

	return (
		<Box
			{...(rest as GridProps<Element>)}
			ref={ref}
			className={classNames(
				'grid',
				classes.grid.alignContent[alignContent],
				classes.grid.alignItems[alignItems],
				classes.grid.justifyContent[justifyContent],
				classes.grid.justifyItems[justifyItems],
				autoColumnsClassName,
				autoFlowClassName,
				autoRowsClassName,
				columnSpacingClassName,
				rowSpacingClassName,
				templateColumnsClassName,
				templateRowsClassName,
				{
					[classes.spacing.gap[spacing]]: !columnSpacing && !rowSpacing,
					[className]: !!className
				}
			)}
		>
			{children}
		</Box>
	);
});

export default Grid;
