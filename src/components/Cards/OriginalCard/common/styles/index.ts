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
	// isFixed as defaultIsFixed,
	variant as defaultVariant
} from '../../../common/data/defaultPropValues';
import { isClickable as defaultIsClickable } from '../data/defaultPropValues';

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
			card.general({ theme, isFullWidth, isClickable }),
			card[variant]({ theme, isFullWidth, isClickable }),
			scheme.card[variant]({ theme, color, isClickable, isLight })
		),
		active: merge(active[variant]({ theme }), scheme.active[variant]({ theme, color, isLight })),
		disabled: merge(disabled.general(), disabled[variant]({ theme }), scheme.disabled[variant]({ theme, isLight }))
	};
});
