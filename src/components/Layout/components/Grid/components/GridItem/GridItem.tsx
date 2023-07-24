import { ElementType, forwardRef, ReactElement } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { Undefinable } from '@common/types';
import type {
	AlignSelf,
	GridColumnSpan,
	GridColumnStartEnd,
	GridRowSpan,
	GridRowStartEnd,
	JustifySelf,
	ZIndex
} from '@common/types/classes';

import Box from '@components/Box';

import {
	__DEFAULT_GRID_ITEM_ALIGN_SELF__,
	__DEFAULT_GRID_ITEM_JUSTIFY_SELF__,
	__DEFAULT_GRID_ITEM_ZINDEX__
} from './common/constants';
import type { GridItemProps, GridItemRef } from './common/types';

const GridItem = forwardRef(function Grid<Element extends ElementType>(
	props: GridItemProps<Element>,
	ref: GridItemRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		alignSelf = __DEFAULT_GRID_ITEM_ALIGN_SELF__,
		columnSpan,
		columnStart,
		columnEnd,
		justifySelf = __DEFAULT_GRID_ITEM_JUSTIFY_SELF__,
		rowSpan,
		rowStart,
		rowEnd,
		zIndex = __DEFAULT_GRID_ITEM_ZINDEX__,
		...rest
	} = props;

	const alignSelfClassName = useGetClass<AlignSelf>(alignSelf, ['grid', 'alignSelf']);
	const justifySelfClassName = useGetClass<JustifySelf>(justifySelf, ['grid', 'justifySelf']);

	const columnSpanClassName = useGetClass<Undefinable<GridColumnSpan>>(columnSpan, ['grid', 'columnSpan']);
	const columnStartClassName = useGetClass<Undefinable<GridColumnStartEnd>>(columnStart, ['grid', 'columnStart']);
	const columnEndClassName = useGetClass<Undefinable<GridColumnStartEnd>>(columnEnd, ['grid', 'columnEnd']);

	const rowSpanClassName = useGetClass<Undefinable<GridRowSpan>>(rowSpan, ['grid', 'rowSpan']);
	const rowStartClassName = useGetClass<Undefinable<GridRowStartEnd>>(rowStart, ['grid', 'rowStart']);
	const rowEndClassName = useGetClass<Undefinable<GridRowStartEnd>>(rowEnd, ['grid', 'rowEnd']);

	const zIndexClassName = useGetClass<Undefinable<ZIndex>>(zIndex, ['layout', 'zIndex']);

	return (
		<Box
			{...(rest as GridItemProps<Element>)}
			ref={ref}
			className={classNames(
				alignSelfClassName,
				justifySelfClassName,
				columnSpanClassName,
				columnStartClassName,
				columnEndClassName,
				rowSpanClassName,
				rowStartClassName,
				rowEndClassName,
				zIndexClassName,
				{ [className]: !!className }
			)}
		>
			{children}
		</Box>
	);
});

export default GridItem;
