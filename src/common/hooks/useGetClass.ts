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
const useGetClass = <D>(responsiveValue: ResponsiveValue<D>, keys: string[] = []): string => {
	const value = useMemo<D>(() => getResponsiveValue<D>(responsiveValue), [responsiveValue]);

	const className = useMemo<string>(() => {
		if (keys.length > 0) {
			return pickFromObj(classes, [...keys, value as string]) as string;
		} else {
			return value as string;
		}
	}, [value]);

	return className;
};

export default useGetClass;
