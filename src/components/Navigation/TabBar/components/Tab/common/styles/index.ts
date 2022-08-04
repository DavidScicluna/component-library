import { merge } from 'lodash';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/data/defaultPropValues';
import { isActive as defaultIsActive } from '../data/defaultPropValues';

import dark from './dark';
import disabled from './disabled';
import light from './light';
import tab from './tab';
import { TabStyleProps, TabStyleReturn } from './types';

export default ({
	theme,
	color = defaultColor,
	colorMode = defaultColorMode,
	isActive = defaultIsActive
}: TabStyleProps): TabStyleReturn => {
	const scheme = colorMode === 'light' ? light : dark;

	return {
		tab: merge(tab({ theme, isActive }), scheme[isActive ? 'active' : 'tab']({ theme, color })),
		disabled: merge(disabled(), scheme.disabled({ theme }))
	};
};
