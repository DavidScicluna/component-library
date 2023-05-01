import memoize from 'micro-memoize';

import { colorMode as defaultColorMode } from '../default/props';

import dark from './dark';
import light from './light';
import pseudo from './pseudo';
import { ArrowStyleProps, ArrowStyleReturn } from './types';

export default memoize(({ theme, colorMode = defaultColorMode, direction }: ArrowStyleProps): ArrowStyleReturn => {
	const scheme = colorMode === 'light' ? light : dark;

	return {
		arrow: scheme({ theme, direction }),
		pseudo: pseudo()
	};
});
