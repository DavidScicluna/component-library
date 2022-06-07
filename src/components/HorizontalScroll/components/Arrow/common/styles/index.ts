import { memoize } from 'lodash';

import after from './after';
import before from './before';
import dark from './dark';
import light from './light';
import { ArrowStyleProps, ArrowStyleReturn } from './types';

import { colorMode as defaultColorMode } from '../data/defaultPropValues';

export default memoize(({ theme, colorMode = defaultColorMode, direction }: ArrowStyleProps): ArrowStyleReturn => {
	const scheme = colorMode === 'light' ? light : dark;

	return {
		arrow: scheme[direction]({ theme }),
		before: before(),
		after: after()
	};
});
