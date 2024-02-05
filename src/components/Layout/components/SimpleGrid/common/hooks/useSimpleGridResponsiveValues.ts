import type { Required } from 'utility-types';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing, Undefinable } from '@common/types';

import { __DEFAULT_SIMPLE_GRID_COLUMNS__ } from '../constants';
import type { SimpleGridColumn, SimpleGridNonResponsiveValueProps, SimpleGridResponsiveValueProps } from '../types';

type UseSimpleGridResponsiveValuesProps = Partial<SimpleGridResponsiveValueProps>;
type UseSimpleGridResponsiveValuesReturn = Required<SimpleGridNonResponsiveValueProps, 'columns' | 'spacing'>;

const useSimpleGridResponsiveValues = (
	props: UseSimpleGridResponsiveValuesProps
): UseSimpleGridResponsiveValuesReturn => {
	const { columns: columnsProp, spacing: spacingProp } = props;

	const columns = useGetResponsiveValue<Undefinable<SimpleGridColumn>>(columnsProp);
	const spacing = useGetResponsiveValue<Undefinable<ThemeSpacing>>(spacingProp);

	return { columns: columns || __DEFAULT_SIMPLE_GRID_COLUMNS__, spacing: spacing || __DEFAULT_SPACING__ };
};

export default useSimpleGridResponsiveValues;
