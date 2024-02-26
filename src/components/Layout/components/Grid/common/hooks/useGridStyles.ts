import type { PolymorphicElementType, Style } from '@common/types';

import { DEFAULT_GRID_TEMPLATE_COLUMNS, DEFAULT_GRID_TEMPLATE_ROWS } from '../constants';
import type { GridProps } from '../types';

import useGridResponsiveValues from './useGridResponsiveValues';

type UseGridStylesProps<Element extends PolymorphicElementType> = Pick<
	GridProps<Element>,
	'templateColumns' | 'templateRows'
>;
type UseGridStylesReturn = Style;

const useGridStyles = <Element extends PolymorphicElementType>(
	props: UseGridStylesProps<Element>
): UseGridStylesReturn => {
	const {
		templateColumns: templateColumnsProp = DEFAULT_GRID_TEMPLATE_COLUMNS,
		templateRows: templateRowsProp = DEFAULT_GRID_TEMPLATE_ROWS
	} = props;

	const { templateColumns, templateRows } = useGridResponsiveValues({
		templateColumns: templateColumnsProp,
		templateRows: templateRowsProp
	});

	return {
		gridTemplateColumns: typeof templateColumns === 'string' ? templateColumns : undefined,
		gridTemplateRows: typeof templateRows === 'string' ? templateRows : undefined
	};
};

export default useGridStyles;
