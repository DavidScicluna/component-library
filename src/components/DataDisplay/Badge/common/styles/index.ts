import { memoize, merge } from 'lodash';

import badge from './badge';
import dark from './dark';
import light from './light';
import { BadgeStyleProps, BadgeStyleReturn } from './types';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isLight as defaultIsLight,
	size as defaultSize,
	variant as defaultVariant
} from '../data/defaultPropValues';

export default memoize((props: BadgeStyleProps): BadgeStyleReturn => {
	const {
		theme,
		color = defaultColor,
		colorMode = defaultColorMode,
		isLight = defaultIsLight,
		size = defaultSize,
		variant = defaultVariant
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		badge: merge(badge({ theme, size }), scheme[variant]({ theme, color, isLight }))
	};
});
