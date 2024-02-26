import { DEFAULT_RADIUS } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeRadius } from '@common/types';

import {
	DEFAULT_PROGRESS_IS_INDETERMINATE,
	DEFAULT_PROGRESS_MAX,
	DEFAULT_PROGRESS_MIN,
	DEFAULT_PROGRESS_VALUE,
	DEFAULT_PROGRESS_VARIANT
} from '../constants';
import type { ProgressElement, ProgressProps, ProgressVariant } from '../types';

type UseProgressResponsiveValuesProps<Element extends ProgressElement> = Partial<
	Pick<ProgressProps<Element>, 'isIndeterminate' | 'max' | 'min' | 'radius' | 'value' | 'variant'>
>;

const useProgressResponsiveValues = <Element extends ProgressElement>(
	props: UseProgressResponsiveValuesProps<Element>
) => {
	const {
		isIndeterminate: isIndeterminateProp = DEFAULT_PROGRESS_IS_INDETERMINATE,
		max: maxProp = DEFAULT_PROGRESS_MAX,
		min: minProp = DEFAULT_PROGRESS_MIN,
		radius: radiusProp = DEFAULT_RADIUS,
		value: valueProp = DEFAULT_PROGRESS_VALUE,
		variant: variantProp = DEFAULT_PROGRESS_VARIANT
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
