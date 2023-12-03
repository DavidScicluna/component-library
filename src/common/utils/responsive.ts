import { isArray, isObject } from 'lodash-es';
import memoize from 'micro-memoize';

import type { ResponsiveArrayValue, ResponsiveObjectValue, ResponsiveValue, ThemeBreakpoint } from '@common/types';

/**
 * This method will return the appropriate responsive value depending on current dimensions of the users device
 *
 * @param value - ResponsiveValue
 * @returns - The responsive value within the array or object that aligns with the breakpoint
 */
export const getResponsiveValue = memoize(<D>(value: ResponsiveValue<D>): D => {
	const status = isArray(value) ? 'array' : isObject(value) ? 'object' : 'default';
	const breakpoint: ThemeBreakpoint = globalThis?.window?.matchMedia('(min-width: 1536px)')
		? '2xl'
		: globalThis?.window?.matchMedia('(min-width: 1280px)')
		? 'xl'
		: globalThis?.window?.matchMedia('(min-width: 1024px)')
		? 'lg'
		: globalThis?.window?.matchMedia('(min-width: 768px)')
		? 'md'
		: globalThis?.window?.matchMedia('(min-width: 640px)')
		? 'sm'
		: 'xs';

	if (status === 'array') {
		const v = value as ResponsiveArrayValue<D>;
		switch (v.length) {
			case 1:
				return v[0] as D;
			case 2:
				return (breakpoint === 'xs' ? v[0] : v[1]) as D;
			case 3:
				return (breakpoint === 'xs' ? v[0] : breakpoint === 'sm' ? v[1] : v[2]) as D;
			case 4:
				return (
					breakpoint === 'xs' ? v[0] : breakpoint === 'sm' ? v[1] : breakpoint === 'md' ? v[2] : v[3]
				) as D;
			case 5:
				return (
					breakpoint === 'xs'
						? v[0]
						: breakpoint === 'sm'
						? v[1]
						: breakpoint === 'md'
						? v[2]
						: breakpoint === 'lg'
						? v[3]
						: v[4]
				) as D;
			case 6:
				return (
					breakpoint === 'xs'
						? v[0]
						: breakpoint === 'sm'
						? v[1]
						: breakpoint === 'md'
						? v[2]
						: breakpoint === 'lg'
						? v[3]
						: breakpoint === 'xl'
						? v[4]
						: v[5]
				) as D;
		}
	} else if (status === 'object') {
		const v = value as ResponsiveObjectValue<D>;
		return v[breakpoint];
	}
	return value as D;
});
