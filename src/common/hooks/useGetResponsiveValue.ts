import { useMemo } from 'react';

import { ResponsiveValue } from '../types';
import { getResponsiveValue } from '../utils';

/**
 * This hook will return the appropriate responsive value depending on current dimensions of the users device
 *
 * @param value - ResponsiveValue
 * @returns - The responsive value within the array or object that aligns with the breakpoint
 */
const useGetResponsiveValue = <D>(value: ResponsiveValue<D>): D => {
	const v = useMemo(() => getResponsiveValue<D>(value), [value]);
	return v;
};

export default useGetResponsiveValue;
