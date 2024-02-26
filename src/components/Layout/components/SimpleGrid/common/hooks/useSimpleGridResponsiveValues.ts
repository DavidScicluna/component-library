import type { Required } from 'utility-types';

import { DEFAULT_SPACING } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing, Undefinable } from '@common/types';

import { DEFAULT_SIMPLE_GRID_COLUMNS } from '../constants';
import type { SimpleGridColumn, SimpleGridNonResponsiveValueProps, SimpleGridResponsiveValueProps } from '../types';

type UseSimpleGridResponsiveValuesProps = Partial<SimpleGridResponsiveValueProps>;
type UseSimpleGridResponsiveValuesReturn = Required<SimpleGridNonResponsiveValueProps, 'columns' | 'spacing'>;

const useSimpleGridResponsiveValues = (
	props: UseSimpleGridResponsiveValuesProps
): UseSimpleGridResponsiveValuesReturn => {
	const { columns: columnsProp, spacing: spacingProp } = props;

	const columns = useGetResponsiveValue<Undefinable<SimpleGridColumn>>(columnsProp);
	const spacing = useGetResponsiveValue<Undefinable<ThemeSpacing>>(spacingProp);

	return { columns: columns || DEFAULT_SIMPLE_GRID_COLUMNS, spacing: spacing || DEFAULT_SPACING };
};

export default useSimpleGridResponsiveValues;
