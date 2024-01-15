import type { Style } from '@common/types';

import { __DEFAULT_GRID_TEMPLATE_COLUMNS__, __DEFAULT_GRID_TEMPLATE_ROWS__ } from '../constants';
import type { GridProps } from '../types';

import useGridResponsiveValues from './useGridResponsiveValues';

type UseGridStylesProps = Pick<GridProps, 'templateColumns' | 'templateRows'>;
type UseGridStylesReturn = Style;

const useGridStyles = (props: UseGridStylesProps): UseGridStylesReturn => {
	const {
		templateColumns: templateColumnsProp = __DEFAULT_GRID_TEMPLATE_COLUMNS__,
		templateRows: templateRowsProp = __DEFAULT_GRID_TEMPLATE_ROWS__
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
