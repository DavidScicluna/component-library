import { merge } from 'lodash';
import memoize from 'micro-memoize';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isLoading as defaultIsLoading,
	isRound as defaultIsRound,
	size as defaultSize,
	variant as defaultVariant
} from '../../../common/data/defaultPropValues';

import active from './active';
import dark from './dark';
import disabled from './disabled';
import iconbutton from './iconbutton';
import light from './light';
import { IconButtonStyleProps, IconButtonStyleReturn } from './types';

export default memoize((props: IconButtonStyleProps): IconButtonStyleReturn => {
	const {
		theme,
		color = defaultColor,
		colorMode = defaultColorMode,
		isRound = defaultIsRound,
		isLoading = defaultIsLoading,
		size = defaultSize,
		variant = defaultVariant
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		iconbutton: merge(
			iconbutton.general({ theme, isRound, size }),
			iconbutton[variant]({ theme, isRound, size }),
			scheme.iconbutton[variant]({ theme, color, size })
		),
		active: merge(active[variant]({ theme, size }), scheme.active[variant]({ theme, color, size })),
		disabled: merge(
			disabled.general({ theme, isLoading, size }),
			disabled[variant]({ theme, isLoading, size }),
			scheme.disabled[variant]({ theme, color, isLoading, size })
		)
	};
});
