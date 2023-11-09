import type { ElementType } from 'react';
import { useContext } from 'react';

import { __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicDefaultElement, ThemeRadius } from '@common/types';

import { ProgressContext } from '../../Progress';
import {
	__DEFAULT_PROGRESS_IS_INDETERMINATE__,
	__DEFAULT_PROGRESS_MAX__,
	__DEFAULT_PROGRESS_MIN__,
	__DEFAULT_PROGRESS_VARIANT__
} from '../constants';
import type { ProgressContext as ProgressContextType, ProgressVariant } from '../types';

const useProgressContext = <Element extends ElementType = PolymorphicDefaultElement>() => {
	const {
		color,
		colorMode,
		isIndeterminate: indeterminate = __DEFAULT_PROGRESS_IS_INDETERMINATE__,
		max: ma = __DEFAULT_PROGRESS_MAX__,
		min: mi = __DEFAULT_PROGRESS_MIN__,
		radius: r = __DEFAULT_RADIUS__,
		variant: v = __DEFAULT_PROGRESS_VARIANT__
	} = useContext<ProgressContextType<Element>>(ProgressContext);

	const isIndeterminate = useGetResponsiveValue<boolean>(indeterminate);

	const max = useGetResponsiveValue<number>(ma);
	const min = useGetResponsiveValue<number>(mi);

	const radius = useGetResponsiveValue<ThemeRadius>(r);

	const variant = useGetResponsiveValue<ProgressVariant>(v);

	return { color, colorMode, isIndeterminate, max, min, radius, variant };
};

export default useProgressContext;
