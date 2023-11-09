import memoize from 'micro-memoize';

import classes from '@common/classes';
import { pickFromObj } from '@common/helpers';
import type { ResponsiveValue } from '@common/types';

import { getResponsiveValue } from '.';

/**
 * This function will return the appropriate class from the classes object depending on the value & keys passed
 *
 * @param responsiveValue - ResponsiveValue
 * @param keys - An array of keys to be used to traverse the deep classes object
 * @returns - The class from the classes object
 */
export const getClass = memoize(<D>(responsiveValue: ResponsiveValue<D>, keys: Array<string> = []): string => {
	const value = getResponsiveValue<D>(responsiveValue);

	const getClassName = (): string => {
		if (keys.length > 0) {
			return pickFromObj(classes, [...keys, value as string]) as string;
		} else {
			return value as string;
		}
	};

	const className = getClassName();

	return className;
});
