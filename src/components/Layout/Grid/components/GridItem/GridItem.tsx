import { ElementType, forwardRef, ReactElement, useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import { Undefinable } from '@common/types';
import {
	AlignSelf,
	GridColumnSpan,
	GridColumnStartEnd,
	GridRowSpan,
	GridRowStartEnd,
	JustifySelf
} from '@common/types/classes';
import { getResponsiveValue } from '@common/utils';

import Box from '@components/Layout/Box';

import { __DEFAULT_GRID_ITEM_ALIGN_SELF__, __DEFAULT_GRID_ITEM_JUSTIFY_SELF__ } from './common/constants';
import { GridItemProps, GridItemRef } from './common/types';

const GridItem = forwardRef(function Grid<Element extends ElementType>(
	props: GridItemProps<Element>,
	ref: GridItemRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		alignSelf: as = __DEFAULT_GRID_ITEM_ALIGN_SELF__,
		columnSpan,
		columnStart,
		columnEnd,
		justifySelf: js = __DEFAULT_GRID_ITEM_JUSTIFY_SELF__,
		rowSpan,
		rowStart,
		rowEnd,
		...rest
	} = props;

	const alignSelf = useGetResponsiveValue<AlignSelf>(as);
	const justifySelf = useGetResponsiveValue<JustifySelf>(js);

	const columnSpanClassName = useMemo<string>(() => {
		const cs = getResponsiveValue<Undefinable<GridColumnSpan>>(columnSpan);
		return cs ? classes.grid.columnSpan[cs] : '';
	}, [columnSpan]);
	const columnStartClassName = useMemo<string>(() => {
		const cs = getResponsiveValue<Undefinable<GridColumnStartEnd>>(columnStart);
		return cs ? classes.grid.columnStart[cs] : '';
	}, [columnStart]);
	const columnEndClassName = useMemo<string>(() => {
		const ce = getResponsiveValue<Undefinable<GridColumnStartEnd>>(columnEnd);
		return ce ? classes.grid.columnEnd[ce] : '';
	}, [columnEnd]);
	const rowSpanClassName = useMemo<string>(() => {
		const rs = getResponsiveValue<Undefinable<GridRowSpan>>(rowSpan);
		return rs ? classes.grid.rowSpan[rs] : '';
	}, [rowSpan]);
	const rowStartClassName = useMemo<string>(() => {
		const rs = getResponsiveValue<Undefinable<GridRowStartEnd>>(rowStart);
		return rs ? classes.grid.rowStart[rs] : '';
	}, [rowStart]);
	const rowEndClassName = useMemo<string>(() => {
		const re = getResponsiveValue<Undefinable<GridRowStartEnd>>(rowEnd);
		return re ? classes.grid.rowEnd[re] : '';
	}, [rowEnd]);

	return (
		<Box
			{...(rest as GridItemProps<Element>)}
			ref={ref}
			className={classNames(
				classes.grid.alignSelf[alignSelf],
				classes.grid.justifySelf[justifySelf],
				columnSpanClassName,
				columnStartClassName,
				columnEndClassName,
				rowSpanClassName,
				rowStartClassName,
				rowEndClassName,
				{ [className]: !!className }
			)}
		>
			{children}
		</Box>
	);
});

export default GridItem;
