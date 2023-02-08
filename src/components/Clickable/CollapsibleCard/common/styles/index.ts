import { memoize, merge } from 'lodash';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth,
	isFixed as defaultIsFixed,
	isLight as defaultIsLight,
	isOpen as defaultIsOpen
} from '../data/defaultPropValues';

import active from './active';
import card from './card';
import dark from './dark';
import disabled from './disabled';
import light from './light';
import { CollapsibleCardStyleProps, CollapsibleCardStyleReturn } from './types';

export default memoize((props: CollapsibleCardStyleProps): CollapsibleCardStyleReturn => {
	const {
		theme,
		color = defaultColor,
		colorMode = defaultColorMode,
		isFullWidth = defaultIsFullWidth,
		isFixed = defaultIsFixed,
		isLight = defaultIsLight,
		isOpen = defaultIsOpen
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		card: merge(card({ theme, isFullWidth, isFixed }), scheme.card({ theme, color, isFixed, isLight, isOpen })),
		active: !isFixed ? merge(active({ theme }), scheme.active({ theme, color, isLight, isOpen })) : {},
		disabled: {
			card: merge(disabled.card({ theme }), scheme.disabled({ theme, isLight })),
			header: disabled.header()
		}
	};
});
