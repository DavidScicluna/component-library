import { merge } from 'lodash';

import active from './active';
import card from './card';
import dark from './dark';
import disabled from './disabled';
import light from './light';
import { CardStyleProps } from './types';

import { Style } from '../../../../common/types';
import { Theme } from '../../../../theme/types';

type CardStyle = {
	card: Style;
	active: Style;
	disabled: Style;
};

export default (theme: Theme, props: CardStyleProps): CardStyle => {
	const {
		color,
		colorMode,
		isFullWidth,
		isLight,
		isClickable,
		// isFixed,
		variant
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		card: merge(
			card(theme, isFullWidth, isClickable, variant),
			variant !== 'transparent' ? scheme.card[variant](theme, color, isLight, isClickable) : {}
		),
		active: merge(
			active(isClickable, variant),
			variant !== 'transparent' ? scheme.active[variant](theme, color, isLight, isClickable) : {}
		),
		disabled: merge(
			disabled(isClickable, variant),
			variant !== 'transparent' ? scheme.disabled[variant](theme, color, isLight, isClickable) : {}
		)
	};
};
