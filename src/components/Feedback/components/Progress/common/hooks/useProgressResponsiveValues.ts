import { __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeRadius } from '@common/types';

import {
	__DEFAULT_PROGRESS_IS_INDETERMINATE__,
	__DEFAULT_PROGRESS_MAX__,
	__DEFAULT_PROGRESS_MIN__,
	__DEFAULT_PROGRESS_VALUE__,
	__DEFAULT_PROGRESS_VARIANT__
} from '../constants';
import type { ProgressProps, ProgressVariant } from '../types';

type UseProgressResponsiveValuesProps = Pick<
	ProgressProps,
	'isIndeterminate' | 'max' | 'min' | 'radius' | 'value' | 'variant'
>;

const useProgressResponsiveValues = (props: UseProgressResponsiveValuesProps) => {
	const {
		isIndeterminate: isIndeterminateProp = __DEFAULT_PROGRESS_IS_INDETERMINATE__,
		max: maxProp = __DEFAULT_PROGRESS_MAX__,
		min: minProp = __DEFAULT_PROGRESS_MIN__,
		radius: radiusProp = __DEFAULT_RADIUS__,
		value: valueProp = __DEFAULT_PROGRESS_VALUE__,
		variant: variantProp = __DEFAULT_PROGRESS_VARIANT__
	} = props;

	const isIndeterminate = useGetResponsiveValue<boolean>(isIndeterminateProp);

	const max = useGetResponsiveValue<number>(maxProp);
	const min = useGetResponsiveValue<number>(minProp);
	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);
	const value = useGetResponsiveValue<number>(valueProp);
	const variant = useGetResponsiveValue<ProgressVariant>(variantProp);

	return { isIndeterminate, max, min, radius, value, variant };
};

export default useProgressResponsiveValues;
