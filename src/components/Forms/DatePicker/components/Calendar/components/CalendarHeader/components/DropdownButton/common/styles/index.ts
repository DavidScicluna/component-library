import { merge } from 'lodash-es';
import memoize from 'micro-memoize';

import {
	color as defaultColor,
	colorMode as defaultColorMode
} from '../../../../../../../../../../../common/default/props';
import { isActive as defaultIsActive } from '../default/props';

import button from './button';
import dark from './dark';
import light from './light';
import { DropdownButtonStyleProps, DropdownButtonStyleReturn } from './types';

export default memoize((props: DropdownButtonStyleProps): DropdownButtonStyleReturn => {
	const { theme, color = defaultColor, colorMode = defaultColorMode, isActive = defaultIsActive } = props;

	const scheme = colorMode === 'light' ? light : dark;

	return { button: merge(button({ theme }), scheme[isActive ? 'active' : 'button']({ theme, color })) };
});
