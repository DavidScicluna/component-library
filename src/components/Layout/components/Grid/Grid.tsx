import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';

import Box from '@components/Box';

import {
	__DEFAULT_GRID_ALIGN_CONTENT__,
	__DEFAULT_GRID_ALIGN_ITEMS__,
	__DEFAULT_GRID_JUSTIFY_CONTENT__,
	__DEFAULT_GRID_JUSTIFY_ITEMS__,
	__DEFAULT_GRID_TEMPLATE_COLUMNS__,
	__DEFAULT_GRID_TEMPLATE_ROWS__
} from './common/constants';
import { useGetGridClasses } from './common/hooks';
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

	const classes = useGetGridClasses({
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
		spacing
	});

	return (
		<Box<Element>
			{...(rest as GridProps<Element>)}
			ref={ref}
			className={classNames(classes, { [className]: !!className })}
		>
			{children}
		</Box>
	);
});

export default Grid;
