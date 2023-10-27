import type { ElementType } from 'react';

import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type {
	AlignSelfClass,
	ClassName,
	GridColumnSpanClass,
	GridColumnStartEndClass,
	GridRowSpanClass,
	GridRowStartEndClass,
	JustifySelfClass,
	PolymorphicDefaultElement,
	Undefinable,
	ZIndexClass
} from '@common/types';

import {
	__DEFAULT_GRID_ITEM_ALIGN_SELF__,
	__DEFAULT_GRID_ITEM_JUSTIFY_SELF__,
	__DEFAULT_GRID_ITEM_Z_INDEX__
} from '../constants';
import type { GridItemProps } from '../types';

type UseGridItemClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
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
type UseGridItemClassesReturn = ClassName;

const useGridItemClasses = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseGridItemClassesProps<Element>
): UseGridItemClassesReturn => {
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

	const alignSelfClassName = useGetClass<AlignSelfClass>(alignSelf, ['grid', 'align_self']);
	const justifySelfClassName = useGetClass<JustifySelfClass>(justifySelf, ['grid', 'justify_self']);

	const columnSpanClassName = useGetClass<Undefinable<GridColumnSpanClass>>(columnSpan, ['grid', 'column_span']);
	const columnStartClassName = useGetClass<Undefinable<GridColumnStartEndClass>>(columnStart, [
		'grid',
		'column_start'
	]);
	const columnEndClassName = useGetClass<Undefinable<GridColumnStartEndClass>>(columnEnd, ['grid', 'column_end']);

	const rowSpanClassName = useGetClass<Undefinable<GridRowSpanClass>>(rowSpan, ['grid', 'row_span']);
	const rowStartClassName = useGetClass<Undefinable<GridRowStartEndClass>>(rowStart, ['grid', 'row_start']);
	const rowEndClassName = useGetClass<Undefinable<GridRowStartEndClass>>(rowEnd, ['grid', 'row_end']);

	const zIndexClassName = useGetClass<Undefinable<ZIndexClass>>(zIndex, ['layout', 'z_index']);

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

export default useGridItemClasses;
