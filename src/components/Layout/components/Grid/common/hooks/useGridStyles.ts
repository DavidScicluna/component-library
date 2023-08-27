import type { ElementType } from 'react';

import { useGetResponsiveValue } from '@common/hooks';
import type { Style } from '@common/types';

import { __DEFAULT_GRID_TEMPLATE_COLUMNS__, __DEFAULT_GRID_TEMPLATE_ROWS__ } from '../constants';
import type { GridProps } from '../types';

type UseGridStylesProps<Element extends ElementType> = Pick<GridProps<Element>, 'templateColumns' | 'templateRows'>;
type UseGridStylesReturn = Style;

const useGridStyles = <Element extends ElementType>(props: UseGridStylesProps<Element>): UseGridStylesReturn => {
	const {
		templateColumns: tc = __DEFAULT_GRID_TEMPLATE_COLUMNS__,
		templateRows: tr = __DEFAULT_GRID_TEMPLATE_ROWS__
	} = props;

	const templateColumns = useGetResponsiveValue(tc);
	const templateRows = useGetResponsiveValue(tr);

	return {
		gridTemplateColumns: typeof templateColumns === 'string' ? templateColumns : undefined,
		gridTemplateRows: typeof templateRows === 'string' ? templateRows : undefined
	};
};

export default useGridStyles;
