import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import {
	__DEFAULT_GRID_ITEM_ALIGN_SELF__,
	__DEFAULT_GRID_ITEM_JUSTIFY_SELF__,
	__DEFAULT_GRID_ITEM_Z_INDEX__
} from './common/constants';
import { useGridItemClasses, useGridItemResponsiveValues } from './common/hooks';
import { __KEYS_GRID_ITEM_CLASS__ } from './common/keys';
import type { GridItemProps, GridItemRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const GridItem = forwardRef(function Grid<Element extends PolymorphicElementType>(
	props: GridItemProps<Element>,
	ref: GridItemRef<Element>
): JSX.Element {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		alignSelf: alignSelfProp = __DEFAULT_GRID_ITEM_ALIGN_SELF__,
		columnSpan: columnSpanProp,
		columnStart: columnStartProp,
		columnEnd: columnEndProp,
		justifySelf: justifySelfProp = __DEFAULT_GRID_ITEM_JUSTIFY_SELF__,
		rowSpan: rowSpanProp,
		rowStart: rowStartProp,
		rowEnd: rowEndProp,
		zIndex: zIndexProp = __DEFAULT_GRID_ITEM_Z_INDEX__,
		...rest
	} = props;

	const { alignSelf, columnSpan, columnStart, columnEnd, justifySelf, rowSpan, rowStart, rowEnd, zIndex } =
		useGridItemResponsiveValues({
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

	const classes = useGridItemClasses<Element>({
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
			{...(rest as BoxProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_GRID_ITEM_CLASS__, classes, { [className]: !!className })}
		>
			{children}
		</Box>
	);
});

// GridItem.displayName = 'GridItem';

export default GridItem;
