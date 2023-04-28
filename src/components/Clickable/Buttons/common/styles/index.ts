import memoize from 'micro-memoize';

import {
	isCompact as defaultIsCompact,
	isFullWidth as defaultIsFullWidth,
	isLoading as defaultIsLoading,
	size as defaultSize
} from '../default/props';

import active from './active';
import button from './button';
import disabled from './disabled';
import { ButtonStyleProps, ButtonStyleReturn } from './types';

export default memoize((props: ButtonStyleProps): ButtonStyleReturn => {
	const {
		theme,
		isCompact = defaultIsCompact,
		isFullWidth = defaultIsFullWidth,
		isLoading = defaultIsLoading,
		size = defaultSize
	} = props;

	return {
		button: button({ theme, isCompact, isFullWidth, size }),
		active: active(),
		disabled: disabled({ isLoading })
	};
});
