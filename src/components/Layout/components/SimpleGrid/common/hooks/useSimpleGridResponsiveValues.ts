import type { Required } from 'utility-types';

import { useGetResponsiveValue } from '@common/hooks';

import { DEFAULT_SIMPLE_GRID_COLUMNS } from '../constants';
import type { SimpleGridNonResponsiveValueProps, SimpleGridResponsiveValueProps } from '../types';

type UseSimpleGridResponsiveValuesProps = Partial<SimpleGridResponsiveValueProps>;
type UseSimpleGridResponsiveValuesReturn = Required<SimpleGridNonResponsiveValueProps, 'columns'>;

const useSimpleGridResponsiveValues = (
	props: UseSimpleGridResponsiveValuesProps
): UseSimpleGridResponsiveValuesReturn => {
	const { columns: columnsProp = DEFAULT_SIMPLE_GRID_COLUMNS, spacing: spacingProp } = props;

	const columns = useGetResponsiveValue<SimpleGridNonResponsiveValueProps['columns']>(columnsProp);
	const spacing = useGetResponsiveValue<SimpleGridNonResponsiveValueProps['spacing']>(spacingProp);

	return { columns, spacing };
};

export default useSimpleGridResponsiveValues;
