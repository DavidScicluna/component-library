import { memoize } from 'lodash';

import { colorMode as defaultColorMode } from '../data/defaultPropValues';

import dark from './dark';
import light from './light';
import pseudo from './pseudo';
import transition from './transition';
import { ArrowStyleProps, ArrowStyleReturn } from './types';

export default memoize(({ theme, colorMode = defaultColorMode, direction }: ArrowStyleProps): ArrowStyleReturn => {
	const scheme = colorMode === 'light' ? light : dark;

	return {
		arrow: scheme({ theme, direction }),
		pseudo: pseudo(),
		transition: transition({ theme })
	};
});
