import type { PolymorphicDefaultElement, PolymorphicElementType, Style } from '@common/types';

import { __DEFAULT_GRID_TEMPLATE_COLUMNS__, __DEFAULT_GRID_TEMPLATE_ROWS__ } from '../constants';
import type { GridProps } from '../types';

import useGridResponsiveValues from './useGridResponsiveValues';

// TODO: Temporary remove PolymorphicDefaultElement to know if Element is being passed
type UseGridStylesProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Pick<
	GridProps<Element>,
	'templateColumns' | 'templateRows'
>;
type UseGridStylesReturn = Style;

const useGridStyles = <Element extends PolymorphicElementType = PolymorphicDefaultElement>(
	props: UseGridStylesProps<Element>
): UseGridStylesReturn => {
	const {
		templateColumns: templateColumnsProp = __DEFAULT_GRID_TEMPLATE_COLUMNS__,
		templateRows: templateRowsProp = __DEFAULT_GRID_TEMPLATE_ROWS__
	} = props;

	const { templateColumns, templateRows } = useGridResponsiveValues<Element>({
		templateColumns: templateColumnsProp,
		templateRows: templateRowsProp
	});

	return {
		gridTemplateColumns: typeof templateColumns === 'string' ? templateColumns : undefined,
		gridTemplateRows: typeof templateRows === 'string' ? templateRows : undefined
	};
};

export default useGridStyles;
