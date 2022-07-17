import { merge } from 'lodash';

import dark from './dark';
import disabled from './disabled';
import light from './light';
import tab from './tab';
import { TabStyleProps, TabStyleReturn } from './types';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/data/defaultPropValues';
import { isActive as defaultIsActive } from '../data/defaultPropValues';

export default ({
	theme,
	color = defaultColor,
	colorMode = defaultColorMode,
	isActive = defaultIsActive
}: TabStyleProps): TabStyleReturn => {
	const scheme = colorMode === 'light' ? light : dark;

	return {
		tab: merge(tab(), scheme[isActive ? 'active' : 'tab']({ theme, color })),
		disabled: merge(disabled(), scheme.disabled({ theme }))
	};
};
