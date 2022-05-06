import { memoize, merge } from 'lodash';

import active from './active';
import button from './button';
import dark from './dark';
import disabled from './disabled';
import light from './light';
import { ButtonStyleProps, ButtonStyleReturn } from './types';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth,
	isLoading as defaultIsLoading,
	size as defaultSize,
	variant as defaultVariant
} from '../data/defaultPropValues';

export default memoize((props: ButtonStyleProps): ButtonStyleReturn => {
	const {
		theme,
		color = defaultColor,
		colorMode = defaultColorMode,
		isFullWidth = defaultIsFullWidth,
		isLoading = defaultIsLoading,
		size = defaultSize,
		variant = defaultVariant
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		button: merge(
			button.general({ theme, isFullWidth, size }),
			button[variant]({ theme, isFullWidth, size }),
			scheme.button[variant]({ theme, color, size })
		),
		active: merge(active[variant]({ theme, size }), scheme.active[variant]({ theme, color, size })),
		disabled: merge(
			disabled.general({ theme, isLoading, size }),
			disabled[variant]({ theme, isLoading, size }),
			scheme.disabled[variant]({ theme, color, isLoading })
		)
	};
});
