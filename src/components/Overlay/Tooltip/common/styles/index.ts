import { merge } from 'lodash';
import memoize from 'memoizee';

import { color as defaultColor, colorMode as defaultColorMode } from '../data/defaultPropValues';

import dark from './dark';
import light from './light';
import tooltip from './tooltip';
import { TooltipStyleProps, TooltipStyleReturn } from './types';

export default memoize((props: TooltipStyleProps): TooltipStyleReturn => {
	const { theme, color = defaultColor, colorMode = defaultColorMode } = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		tooltip: merge(tooltip({ theme }), scheme({ theme, color }))
	};
});
