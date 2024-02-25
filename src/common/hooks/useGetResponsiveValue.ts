import { useCallback, useEffect, useState } from 'react';

import { debounce } from 'lodash-es';
import { useWindowEventListener } from 'rooks';

import type { ResponsiveValue } from '@common/types';
import { getResponsiveValue } from '@common/utils';

import useBreakpoint from './useBreakpoint';

/**
 * This hook will return the appropriate responsive value depending on current dimensions of the users device
 *
 * @param responsiveValue - ResponsiveValue
 * @returns - The responsive value within the array or object that aligns with the breakpoint
 */
const useGetResponsiveValue = <D>(responsiveValue: ResponsiveValue<D>): D => {
	const breakpoint = useBreakpoint();
	const [actualValue, setActualValue] = useState<D>(getResponsiveValue<D>(responsiveValue));

	const handleGetValue = useCallback(
		debounce(() => {
			setActualValue(getResponsiveValue<D>(responsiveValue, breakpoint));
		}, 0),
		[responsiveValue, breakpoint]
	);

	useEffect(() => handleGetValue(), [responsiveValue, breakpoint]);
	useWindowEventListener('resize', handleGetValue);

	return actualValue;
};

export default useGetResponsiveValue;
