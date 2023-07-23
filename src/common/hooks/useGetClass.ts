import { useMemo } from 'react';

import classes from '@common/classes';
import pickFromObj from '@common/helpers/pickFromObj';
import type { ResponsiveValue } from '@common/types';
import { getResponsiveValue } from '@common/utils';

/**
 * This hook will return the appropriate responsive value depending on current dimensions of the users device
 *
 * @param value - ResponsiveValue
 * @returns - The responsive value within the array or object that aligns with the breakpoint
 */
const useGetClass = <D>(responsiveValue: ResponsiveValue<D>, keys: string[] = []) => {
	const value = useMemo(() => getResponsiveValue<D>(responsiveValue), [responsiveValue]);

	if (keys.length > 0) {
		return pickFromObj(classes, [...keys, value as string]);
	} else {
		return value;
	}
};

export default useGetClass;
