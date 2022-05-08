import { memoize, merge } from 'lodash';

import active from './active';
import card from './card';
import dark from './dark';
import disabled from './disabled';
import light from './light';
import { CardStyleProps, CardStyleReturn } from './types';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth,
	isLight as defaultIsLight,
	isClickable as defaultIsClickable,
	// isFixed as defaultIsFixed,
	variant as defaultVariant
} from '../data/defaultPropValues';

export default memoize((props: CardStyleProps): CardStyleReturn => {
	const {
		theme,
		color = defaultColor,
		colorMode = defaultColorMode,
		isFullWidth = defaultIsFullWidth,
		isLight = defaultIsLight,
		isClickable = defaultIsClickable,
		variant = defaultVariant
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		card: merge(
			card.general({ theme, isFullWidth, size }),
			card[variant]({ theme, isFullWidth, size }),
			scheme.card[variant]({ theme, color, size })
		),
		active: merge(active[variant]({ theme, size }), scheme.active[variant]({ theme, color, size })),
		disabled: merge(
			disabled.general({ theme, isLoading, size }),
			disabled[variant]({ theme, isLoading, size }),
			scheme.disabled[variant]({ theme, color, isLoading, size })
		)
	};
});
