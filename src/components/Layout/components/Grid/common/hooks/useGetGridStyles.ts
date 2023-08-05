import type { ElementType } from 'react';

import { useGetResponsiveValue } from '@common/hooks';
import type { Style } from '@common/types';

import { __DEFAULT_GRID_TEMPLATE_COLUMNS__, __DEFAULT_GRID_TEMPLATE_ROWS__ } from '../constants';
import type { GridProps } from '../types';

type UseGetGridStylesProps<Element extends ElementType> = Pick<GridProps<Element>, 'templateColumns' | 'templateRows'>;
type UseGetGridStylesReturn = Style;

const useGetGridStyles = <Element extends ElementType>(
	props: UseGetGridStylesProps<Element>
): UseGetGridStylesReturn => {
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

export default useGetGridStyles;
