import { merge } from 'lodash';

import dark from './dark';
import disabled from './disabled';
import light from './light';
import tab from './tab';
import { TabStyleProps, TabStyleReturn } from './types';

import { color as defaultColor, colorMode as defaultColorMode } from '../data/defaultPropValues';

export default ({ theme, color = defaultColor, colorMode = defaultColorMode }: TabStyleProps): TabStyleReturn => {
	const scheme = colorMode === 'light' ? light : dark;

	return {
		tab: merge(tab(), scheme.tab({ theme, color })),
		disabled: merge(disabled(), scheme.disabled({ theme })),
		active: scheme.active({ theme, color })
	};
};
