import { memoize, merge } from 'lodash';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth,
	isLight as defaultIsLight,
	variant as defaultVariant
} from '../../../common/data/defaultPropValues';
import { isClickable as defaultIsClickable, isFixed as defaultIsFixed } from '../data/defaultPropValues';

import active from './active';
import card from './card';
import dark from './dark';
import disabled from './disabled';
import light from './light';
import { CardStyleProps, CardStyleReturn } from './types';

export default memoize((props: CardStyleProps): CardStyleReturn => {
	const {
		theme,
		color = defaultColor,
		colorMode = defaultColorMode,
		isClickable = defaultIsClickable,
		isFullWidth = defaultIsFullWidth,
		isFixed = defaultIsFixed,
		isLight = defaultIsLight,
		variant = defaultVariant
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		card: merge(
			card.general({ theme, isClickable, isFullWidth, isFixed }),
			card[variant]({ theme, isClickable, isFullWidth }),
			scheme.card[variant]({ theme, color, isClickable, isFixed, isLight })
		),
		active:
			isClickable && !isFixed
				? merge(active[variant]({ theme }), scheme.active[variant]({ theme, color, isLight }))
				: {},
		disabled:
			isClickable && !isFixed
				? merge(disabled.general(), disabled[variant]({ theme }), scheme.disabled[variant]({ theme, isLight }))
				: {}
	};
});
