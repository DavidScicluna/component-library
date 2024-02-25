import { isArray, isObject } from 'lodash-es';
import memoize from 'micro-memoize';
import { __DEFAULT_BREAKPOINT__, convertStringToNumber } from 'src';

import type { ResponsiveValue, ThemeBreakpoint } from '@common/types';

import theme from '../theme';

/**
 * This method will return the theme breakpoint depending on the user's window width
 *
 * @param width - The width of the user's window
 * @returns - The current breakpoint
 */
export const getBreakpoint = (width = 0): ThemeBreakpoint => {
	if (width) {
		const xs = convertStringToNumber(theme.container.xs, 'px');
		const sm = convertStringToNumber(theme.container.sm, 'px');
		const md = convertStringToNumber(theme.container.md, 'px');
		const lg = convertStringToNumber(theme.container.lg, 'px');
		const xl = convertStringToNumber(theme.container.xl, 'px');
		const xl2 = convertStringToNumber(theme.container['2xl'], 'px');

		if (width >= xs && width < sm) {
			return 'xs';
		} else if (width >= sm && width < md) {
			return 'sm';
		} else if (width >= md && width < lg) {
			return 'md';
		} else if (width >= lg && width < xl) {
			return 'lg';
		} else if (width >= xl && width < xl2) {
			return 'xl';
		} else {
			return '2xl';
		}
	} else {
		return __DEFAULT_BREAKPOINT__;
	}
};

/**
 * This method will return the appropriate responsive value depending on current dimensions of the users device
 *
 * @param value - ResponsiveValue
 * @returns - The responsive value within the array or object that aligns with the breakpoint
 */
export const getResponsiveValue = memoize(
	<D>(value: ResponsiveValue<D>, breakpoint: ThemeBreakpoint = __DEFAULT_BREAKPOINT__): D => {
		if (isArray(value)) {
			switch (value.length) {
				case 1:
					return value[0] as D;
				case 2:
					return (breakpoint === 'xs' ? value[0] : value[1]) as D;
				case 3:
					return (breakpoint === 'xs' ? value[0] : breakpoint === 'sm' ? value[1] : value[2]) as D;
				case 4:
					return (
						breakpoint === 'xs'
							? value[0]
							: breakpoint === 'sm'
								? value[1]
								: breakpoint === 'md'
									? value[2]
									: value[3]
					) as D;
				case 5:
					return (
						breakpoint === 'xs'
							? value[0]
							: breakpoint === 'sm'
								? value[1]
								: breakpoint === 'md'
									? value[2]
									: breakpoint === 'lg'
										? value[3]
										: value[4]
					) as D;
				case 6:
					return (
						breakpoint === 'xs'
							? value[0]
							: breakpoint === 'sm'
								? value[1]
								: breakpoint === 'md'
									? value[2]
									: breakpoint === 'lg'
										? value[3]
										: breakpoint === 'xl'
											? value[4]
											: value[5]
					) as D;
			}
		} else if (isObject(value) && Object.keys(value).includes(breakpoint)) {
			return value[breakpoint];
		}
		return value as D;
	}
);
