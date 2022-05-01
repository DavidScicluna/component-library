import { memoize, merge } from 'lodash';

import active from './active';
import button from './button';
import dark from './dark';
import disabled from './disabled';
import light from './light';
import { ButtonStyleProps, ButtonStyleReturn } from './types';

export default memoize((props: ButtonStyleProps): ButtonStyleReturn => {
	const {
		theme,
		color = 'gray',
		colorMode,
		isFullWidth = false,
		isLoading = false,
		size = 'md',
		variant = 'contained'
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		button: merge(
			button.general({ theme, isFullWidth, size }),
			button[variant]({ theme, isFullWidth, size }),
			scheme.button[variant]({ theme, color, size })
		),
		active: merge(active[variant]({ size }), scheme.active[variant]({ theme, color, size })),
		disabled: merge(
			disabled.general({ isLoading, size }),
			disabled[variant]({ isLoading, size }),
			scheme.disabled[variant]({ theme, color, isLoading })
		)
	};
});
