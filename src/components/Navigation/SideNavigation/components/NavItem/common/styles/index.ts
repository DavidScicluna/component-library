import { memoize, merge } from 'lodash';

import dark from './dark';
import disabled from './disabled';
import light from './light';
import navItem from './navItem';
import { NavItemStyleProps, NavItemStyleReturn } from './types';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	mode as defaultMode
} from '../../../../common/data/defaultPropValues';
import { isActive as defaultIsActive } from '../data/defaultPropValues';

export default memoize((props: NavItemStyleProps): NavItemStyleReturn => {
	const {
		theme,
		color = defaultColor,
		colorMode = defaultColorMode,
		isActive = defaultIsActive,
		mode = defaultMode
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		navItem: merge(navItem({ theme, isActive, mode }), scheme[isActive ? 'active' : 'navItem']({ theme, color })),
		disabled: disabled()
	};
});
