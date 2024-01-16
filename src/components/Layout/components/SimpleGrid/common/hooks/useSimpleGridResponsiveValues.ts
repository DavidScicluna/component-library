import type { DeepRequired } from 'utility-types';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicDefaultElement, PolymorphicElementType, ThemeSpacing } from '@common/types';

import { __DEFAULT_SIMPLE_GRID_COLUMNS__ } from '../constants';
import type { SimpleGridColumn, SimpleGridOtherProps, SimpleGridProps } from '../types';

type PickedSimpleGridProps = 'columns' | 'spacing';

type UseSimpleGridResponsiveValuesProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Partial<
	Pick<SimpleGridProps<Element>, PickedSimpleGridProps>
>;
type UseSimpleGridResponsiveValuesReturn = DeepRequired<Pick<SimpleGridOtherProps, PickedSimpleGridProps>>;

const useSimpleGridResponsiveValues = <Element extends PolymorphicElementType = PolymorphicDefaultElement>(
	props: UseSimpleGridResponsiveValuesProps<Element>
): UseSimpleGridResponsiveValuesReturn => {
	const { columns: columnsProp = __DEFAULT_SIMPLE_GRID_COLUMNS__, spacing: spacingProp = __DEFAULT_SPACING__ } =
		props;

	const columns = useGetResponsiveValue<SimpleGridColumn>(columnsProp);
	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);

	return { columns, spacing };
};

export default useSimpleGridResponsiveValues;
