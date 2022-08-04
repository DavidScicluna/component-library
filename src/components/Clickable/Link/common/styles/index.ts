import { memoize, merge } from 'lodash';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultFullWidth
} from '../data/defaultPropValues';

import dark from './dark';
import disabled from './disabled';
import light from './light';
import link from './link';
import { LinkStyleProps, LinkStyleReturn } from './types';

export default memoize((props: LinkStyleProps): LinkStyleReturn => {
	const {
		theme,
		color = defaultColor,
		colorMode = defaultColorMode,
		isFullWidth = defaultFullWidth,
		isString = false
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		link: merge(
			link({ theme, isFullWidth, isString }),
			isString && color !== 'transparent' ? scheme({ theme, color }) : {}
		),
		disabled: disabled()
	};
});
