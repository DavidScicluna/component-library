import { merge } from 'lodash-es';
import memoize from 'micro-memoize';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth,
	isLight as defaultIsLight,
	variant as defaultVariant
} from '../../../common/data/defaultPropValues';

import card from './card';
import dark from './dark';
import light from './light';
import { DummyCardStyleProps, DummyCardStyleReturn } from './types';

export default memoize((props: DummyCardStyleProps): DummyCardStyleReturn => {
	const {
		theme,
		color = defaultColor,
		colorMode = defaultColorMode,
		isFullWidth = defaultIsFullWidth,
		isLight = defaultIsLight,
		variant = defaultVariant
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		card: merge(
			card.general({ theme, isFullWidth }),
			card[variant]({ theme, isFullWidth }),
			scheme[variant]({ theme, color, isLight })
		)
	};
});
