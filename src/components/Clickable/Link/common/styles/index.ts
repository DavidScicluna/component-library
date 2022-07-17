import { memoize, merge } from 'lodash';

import dark from './dark';
import disabled from './disabled';
import light from './light';
import link from './link';
import { LinkStyleProps, LinkStyleReturn } from './types';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultFullWidth,
	hasUnderline as defaultHasUnderline
} from '../data/defaultPropValues';

export default memoize((props: LinkStyleProps): LinkStyleReturn => {
	const {
		theme,
		color = defaultColor,
		colorMode = defaultColorMode,
		isFullWidth = defaultFullWidth,
		hasUnderline = defaultHasUnderline
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		link: merge(
			link({ theme, isFullWidth }),
			hasUnderline && color !== 'transparent' ? scheme({ theme, color }) : {}
		),
		disabled: disabled()
	};
});
