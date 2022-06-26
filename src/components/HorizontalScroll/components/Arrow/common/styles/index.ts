import { memoize } from 'lodash';

import dark from './dark';
import light from './light';
import pseudo from './pseudo';
import transition from './transition';
import { ArrowStyleProps, ArrowStyleReturn } from './types';

import { colorMode as defaultColorMode, isDisabled as defaultIsDisabled } from '../data/defaultPropValues';

export default memoize(
	({
		theme,
		colorMode = defaultColorMode,
		direction,
		isDisabled = defaultIsDisabled
	}: ArrowStyleProps): ArrowStyleReturn => {
		const scheme = colorMode === 'light' ? light : dark;

		return {
			arrow: scheme({ theme, direction, isDisabled }),
			pseudo: pseudo(),
			transition: transition({ theme })
		};
	}
);
