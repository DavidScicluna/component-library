import { memoize, merge } from 'lodash';

import active from './active';
import dark from './dark';
import disabled from './disabled';
import iconbutton from './iconbutton';
import light from './light';
import { IconButtonStyleProps, IconButtonStyleReturn } from './types';

export default memoize((props: IconButtonStyleProps): IconButtonStyleReturn => {
	const {
		theme,
		color = 'gray',
		colorMode,
		isLoading = false,
		isRound = false,
		size = 'md',
		variant = 'contained'
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		iconbutton: merge(
			iconbutton.general({ theme, isRound, size }),
			iconbutton[variant]({ theme, isRound, size }),
			scheme.iconbutton[variant]({ theme, color, size })
		),
		active: merge(active[variant]({ size }), scheme.active[variant]({ theme, color, size })),
		disabled: merge(
			disabled.general({ isLoading, size }),
			disabled[variant]({ isLoading, size }),
			scheme.disabled[variant]({ theme, color, isLoading })
		)
	};
});
