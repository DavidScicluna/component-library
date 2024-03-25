import { forwardRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';

import { DEFAULT_CLASSNAME, DEFAULT_POLYMORPHIC_SX } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Box } from '@components/Box';

import { useGridClasses, useGridResponsiveValues, useGridStyles } from './common/hooks';
import { KEYS_GRID_CLASS } from './common/keys';
import type { GridProps, GridRef } from './common/types';

const Grid = forwardRef(function Grid<Element extends PolymorphicElementType>(
	props: GridProps<Element>,
	ref: GridRef<Element>
): JSX.Element {
	const {
		children,
		className = DEFAULT_CLASSNAME,
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
		spacing: spacingProp,
		sx = DEFAULT_POLYMORPHIC_SX,
		...rest
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
		spacing
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

	const classes = useGridClasses({
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
	const styles = useGridStyles({ templateColumns, templateRows });

	return (
		<Box
			{...{ rest }}
			ref={ref}
			className={classNames(KEYS_GRID_CLASS, classes, { [className]: !!className })}
			sx={merge(styles, sx)}
		>
			{children}
		</Box>
	);
});

// Grid.displayName = 'Grid';

export default Grid;
