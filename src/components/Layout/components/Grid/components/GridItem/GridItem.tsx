import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Box } from '@components/Box';

import {
	DEFAULT_GRID_ITEM_ALIGN_SELF,
	DEFAULT_GRID_ITEM_JUSTIFY_SELF,
	DEFAULT_GRID_ITEM_Z_INDEX
} from './common/constants';
import { useGridItemClasses, useGridItemResponsiveValues } from './common/hooks';
import { KEYS_GRID_ITEM_CLASS } from './common/keys';
import type { GridItemProps, GridItemRef } from './common/types';

const GridItem = forwardRef(function Grid<Element extends PolymorphicElementType>(
	props: GridItemProps<Element>,
	ref: GridItemRef<Element>
): JSX.Element {
	const {
		children,
		className = DEFAULT_CLASSNAME,
		alignSelf: alignSelfProp,
		columnSpan: columnSpanProp,
		columnStart: columnStartProp,
		columnEnd: columnEndProp,
		justifySelf: justifySelfProp,
		rowSpan: rowSpanProp,
		rowStart: rowStartProp,
		rowEnd: rowEndProp,
		zIndex: zIndexProp,
		...rest
	} = props;

	const {
		alignSelf = DEFAULT_GRID_ITEM_ALIGN_SELF,
		columnSpan,
		columnStart,
		columnEnd,
		justifySelf = DEFAULT_GRID_ITEM_JUSTIFY_SELF,
		rowSpan,
		rowStart,
		rowEnd,
		zIndex = DEFAULT_GRID_ITEM_Z_INDEX
	} = useGridItemResponsiveValues({
		alignSelf: alignSelfProp,
		columnSpan: columnSpanProp,
		columnStart: columnStartProp,
		columnEnd: columnEndProp,
		justifySelf: justifySelfProp,
		rowSpan: rowSpanProp,
		rowStart: rowStartProp,
		rowEnd: rowEndProp,
		zIndex: zIndexProp
	});

	const classes = useGridItemClasses({
		alignSelf,
		columnSpan,
		columnStart,
		columnEnd,
		justifySelf,
		rowSpan,
		rowStart,
		rowEnd,
		zIndex
	});

	return (
		<Box
			{...{ rest }}
			ref={ref}
			className={classNames(KEYS_GRID_ITEM_CLASS, classes, { [className]: !!className })}
		>
			{children}
		</Box>
	);
});

// GridItem.displayName = 'GridItem';

export default GridItem;
