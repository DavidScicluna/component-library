import { useContext } from 'react';

import { DEFAULT_RADIUS } from '@common/constants';

import { ProgressContext } from '../../Progress';
import {
	DEFAULT_PROGRESS_IS_INDETERMINATE,
	DEFAULT_PROGRESS_MAX,
	DEFAULT_PROGRESS_MIN,
	DEFAULT_PROGRESS_VARIANT
} from '../constants';
import type { ProgressContext as ProgressContextType, ProgressElement } from '../types';

import useProgressResponsiveValues from './useProgressResponsiveValues';

const useProgressContext = <Element extends ProgressElement>() => {
	const {
		color,
		colorMode,
		isIndeterminate: isIndeterminateProp = DEFAULT_PROGRESS_IS_INDETERMINATE,
		max: maxProp = DEFAULT_PROGRESS_MAX,
		min: minProp = DEFAULT_PROGRESS_MIN,
		radius: radiusProp = DEFAULT_RADIUS,
		variant: variantProp = DEFAULT_PROGRESS_VARIANT
	} = useContext<ProgressContextType<Element>>(ProgressContext);

	const { isIndeterminate, max, min, radius, variant } = useProgressResponsiveValues<Element>({
		isIndeterminate: isIndeterminateProp,
		max: maxProp,
		min: minProp,
		radius: radiusProp,
		variant: variantProp
	});

	return { color, colorMode, isIndeterminate, max, min, radius, variant };
};

export default useProgressContext;
