import type { Style } from '@common/types';

import { DEFAULT_GRID_TEMPLATE_COLUMNS, DEFAULT_GRID_TEMPLATE_ROWS } from '../constants';
import type { GridUniqueProps } from '../types';

import useGridResponsiveValues from './useGridResponsiveValues';

type UseGridStylesProps = Pick<GridUniqueProps, 'templateColumns' | 'templateRows'>;
type UseGridStylesReturn = Style;

const useGridStyles = (props: UseGridStylesProps): UseGridStylesReturn => {
	const { templateColumns: templateColumnsProp, templateRows: templateRowsProp } = props;

	const { templateColumns = DEFAULT_GRID_TEMPLATE_COLUMNS, templateRows = DEFAULT_GRID_TEMPLATE_ROWS } =
		useGridResponsiveValues({
			templateColumns: templateColumnsProp,
			templateRows: templateRowsProp
		});

	return {
		gridTemplateColumns: typeof templateColumns === 'string' ? templateColumns : undefined,
		gridTemplateRows: typeof templateRows === 'string' ? templateRows : undefined
	};
};

export default useGridStyles;
