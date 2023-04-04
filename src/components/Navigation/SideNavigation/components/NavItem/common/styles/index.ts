import { merge } from 'lodash';
import memoize from 'micro-memoize';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	mode as defaultMode
} from '../../../../common/data/defaultPropValues';
import { isActive as defaultIsActive, isChildActive as defaultIsChildActive } from '../data/defaultPropValues';

import dark from './dark';
import disabled from './disabled';
import light from './light';
import navItem from './navItem';
import { NavItemStyleProps, NavItemStyleReturn } from './types';

export default memoize((props: NavItemStyleProps): NavItemStyleReturn => {
	const {
		theme,
		color = defaultColor,
		colorMode = defaultColorMode,
		isActive = defaultIsActive,
		isChildActive = defaultIsChildActive,
		mode = defaultMode
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		navItem: merge(
			navItem({ theme, isActive, mode }),
			scheme[isActive ? 'active' : isChildActive ? 'childActive' : 'navItem']({ theme, color })
		),
		disabled: disabled()
	};
});
