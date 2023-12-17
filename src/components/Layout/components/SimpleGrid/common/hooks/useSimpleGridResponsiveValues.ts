import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import { __DEFAULT_SIMPLE_GRID_COLUMNS__ } from '../constants';
import type { SimpleGridColumn, SimpleGridProps } from '../types';

type UseSimpleGridResponsiveValuesProps = Partial<Pick<SimpleGridProps, 'columns' | 'spacing'>>;

const useSimpleGridResponsiveValues = (props: UseSimpleGridResponsiveValuesProps) => {
	const { columns: columnsProp = __DEFAULT_SIMPLE_GRID_COLUMNS__, spacing: spacingProp = __DEFAULT_SPACING__ } =
		props;

	const columns = useGetResponsiveValue<SimpleGridColumn>(columnsProp);
	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);

	return { columns, spacing };
};

export default useSimpleGridResponsiveValues;
