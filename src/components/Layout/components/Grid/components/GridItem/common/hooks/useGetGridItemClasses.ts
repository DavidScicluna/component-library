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

	const alignSelfClassName = useGetClass<AlignSelf>(alignSelf, ['grid', 'alignSelf']);
	const justifySelfClassName = useGetClass<JustifySelf>(justifySelf, ['grid', 'justifySelf']);

	const columnSpanClassName = useGetClass<Undefinable<GridColumnSpan>>(columnSpan, ['grid', 'columnSpan']);
	const columnStartClassName = useGetClass<Undefinable<GridColumnStartEnd>>(columnStart, ['grid', 'columnStart']);
	const columnEndClassName = useGetClass<Undefinable<GridColumnStartEnd>>(columnEnd, ['grid', 'columnEnd']);

	const rowSpanClassName = useGetClass<Undefinable<GridRowSpan>>(rowSpan, ['grid', 'rowSpan']);
	const rowStartClassName = useGetClass<Undefinable<GridRowStartEnd>>(rowStart, ['grid', 'rowStart']);
	const rowEndClassName = useGetClass<Undefinable<GridRowStartEnd>>(rowEnd, ['grid', 'rowEnd']);

	const zIndexClassName = useGetClass<Undefinable<ZIndex>>(zIndex, ['layout', 'zIndex']);

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
