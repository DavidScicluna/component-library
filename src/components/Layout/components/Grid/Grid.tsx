import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { merge } from 'lodash-es';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__, __DEFAULT_SPACING__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { Box } from '@components/Box';

import {
	__DEFAULT_GRID_ALIGN_CONTENT__,
	__DEFAULT_GRID_ALIGN_ITEMS__,
	__DEFAULT_GRID_JUSTIFY_CONTENT__,
	__DEFAULT_GRID_JUSTIFY_ITEMS__,
	__DEFAULT_GRID_TEMPLATE_COLUMNS__,
	__DEFAULT_GRID_TEMPLATE_ROWS__
} from './common/constants';
import { useGridClasses, useGridResponsiveValues, useGridStyles } from './common/hooks';
import { __KEYS_GRID_CLASS__ } from './common/keys';
import type { GridProps, GridRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Grid: PolymorphicComponentWithRef = forwardRef(function Grid<
	Element extends ElementType = PolymorphicDefaultElement
>(props: GridProps<Element>, ref: GridRef<Element>): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
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
		spacing: spacingProp = __DEFAULT_SPACING__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
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
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_GRID_CLASS__, classes, { [className]: !!className })}
			sx={merge(styles, sx)}
		>
			{children}
		</Box>
	);
});

Grid.displayName = 'Grid';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <Grid<Element> {...props} />;
