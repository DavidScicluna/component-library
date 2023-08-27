import type { ElementType } from 'react';

import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName, Undefinable } from '@common/types';
import type {
	AlignSelf,
	GridColumnSpan,
	GridColumnStartEnd,
	GridRowSpan,
	GridRowStartEnd,
	JustifySelf,
	ZIndex
} from '@common/types/classes';

import {
	__DEFAULT_GRID_ITEM_ALIGN_SELF__,
	__DEFAULT_GRID_ITEM_JUSTIFY_SELF__,
	__DEFAULT_GRID_ITEM_Z_INDEX__
} from '../constants';
import type { GridItemProps } from '../types';

type UseGetGridItemClassesProps<Element extends ElementType> = Pick<
	GridItemProps<Element>,
	| 'alignSelf'
	| 'columnSpan'
	| 'columnStart'
	| 'columnEnd'
	| 'justifySelf'
	| 'rowSpan'
	| 'rowStart'
	| 'rowEnd'
	| 'zIndex'
>;
type UseGetGridItemClassesReturn = ClassName;

const useGetGridItemClasses = <Element extends ElementType>(
	props: UseGetGridItemClassesProps<Element>
): UseGetGridItemClassesReturn => {
	const {
		alignSelf = __DEFAULT_GRID_ITEM_ALIGN_SELF__,
		columnSpan,
		columnStart,
		columnEnd,
		justifySelf = __DEFAULT_GRID_ITEM_JUSTIFY_SELF__,
		rowSpan,
		rowStart,
		rowEnd,
		zIndex = __DEFAULT_GRID_ITEM_Z_INDEX__
	} = props;

	const alignSelfClassName = useGetClass<AlignSelf>(alignSelf, ['grid', 'align_self']);
	const justifySelfClassName = useGetClass<JustifySelf>(justifySelf, ['grid', 'justify_self']);

	const columnSpanClassName = useGetClass<Undefinable<GridColumnSpan>>(columnSpan, ['grid', 'column_span']);
	const columnStartClassName = useGetClass<Undefinable<GridColumnStartEnd>>(columnStart, ['grid', 'column_start']);
	const columnEndClassName = useGetClass<Undefinable<GridColumnStartEnd>>(columnEnd, ['grid', 'column_end']);

	const rowSpanClassName = useGetClass<Undefinable<GridRowSpan>>(rowSpan, ['grid', 'row_span']);
	const rowStartClassName = useGetClass<Undefinable<GridRowStartEnd>>(rowStart, ['grid', 'row_start']);
	const rowEndClassName = useGetClass<Undefinable<GridRowStartEnd>>(rowEnd, ['grid', 'row_end']);

	const zIndexClassName = useGetClass<Undefinable<ZIndex>>(zIndex, ['layout', 'z_index']);

	return classNames(
		alignSelfClassName,
		justifySelfClassName,
		columnSpanClassName,
		columnStartClassName,
		columnEndClassName,
		rowSpanClassName,
		rowStartClassName,
		rowEndClassName,
		zIndexClassName
	);
};

export default useGetGridItemClasses;
