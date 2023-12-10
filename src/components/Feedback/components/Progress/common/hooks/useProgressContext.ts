import { useContext } from 'react';

import { __DEFAULT_RADIUS__ } from '@common/constants';

import { ProgressContext } from '../../Progress';
import {
	__DEFAULT_PROGRESS_IS_INDETERMINATE__,
	__DEFAULT_PROGRESS_MAX__,
	__DEFAULT_PROGRESS_MIN__,
	__DEFAULT_PROGRESS_VARIANT__
} from '../constants';
import type { ProgressContext as ProgressContextType } from '../types';

import useProgressResponsiveValues from './useProgressResponsiveValues';

const useProgressContext = () => {
	const {
		color,
		colorMode,
		isIndeterminate: isIndeterminateProp = __DEFAULT_PROGRESS_IS_INDETERMINATE__,
		max: maxProp = __DEFAULT_PROGRESS_MAX__,
		min: minProp = __DEFAULT_PROGRESS_MIN__,
		radius: radiusProp = __DEFAULT_RADIUS__,
		variant: variantProp = __DEFAULT_PROGRESS_VARIANT__
	} = useContext<ProgressContextType>(ProgressContext);

	const { isIndeterminate, max, min, radius, variant } = useProgressResponsiveValues({
		isIndeterminate: isIndeterminateProp,
		max: maxProp,
		min: minProp,
		radius: radiusProp,
		variant: variantProp
	});

	return { color, colorMode, isIndeterminate, max, min, radius, variant };
};

export default useProgressContext;
