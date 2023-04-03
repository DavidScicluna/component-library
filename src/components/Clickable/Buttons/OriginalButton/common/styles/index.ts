import { merge } from 'lodash';
import memoize from 'memoizee';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth,
	isLoading as defaultIsLoading,
	isRound as defaultIsRound,
	size as defaultSize,
	variant as defaultVariant
} from '../../../common/data/defaultPropValues';

import active from './active';
import button from './button';
import dark from './dark';
import disabled from './disabled';
import light from './light';
import { ButtonStyleProps, ButtonStyleReturn } from './types';

export default memoize((props: ButtonStyleProps): ButtonStyleReturn => {
	const {
		theme,
		color = defaultColor,
		colorMode = defaultColorMode,
		isFullWidth = defaultIsFullWidth,
		isLoading = defaultIsLoading,
		isRound = defaultIsRound,
		size = defaultSize,
		variant = defaultVariant
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		button: merge(
			button.general({ theme, isFullWidth, isRound, size }),
			button[variant]({ theme, isFullWidth, isRound, size }),
			scheme.button[variant]({ theme, color, size })
		),
		active: merge(active[variant]({ theme, size }), scheme.active[variant]({ theme, color, size })),
		disabled: merge(
			disabled.general({ theme, isLoading, size }),
			disabled[variant]({ theme, isLoading, size }),
			scheme.disabled[variant]({ theme, color, isLoading, size })
		)
	};
});
