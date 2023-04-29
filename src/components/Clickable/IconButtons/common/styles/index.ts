import memoize from 'micro-memoize';

import { isLoading as defaultIsLoading } from '../default/props';

import active from './active';
import disabled from './disabled';
import iconbutton from './iconbutton';
import { IconButtonStyleProps, IconButtonStyleReturn } from './types';

export default memoize((props: IconButtonStyleProps): IconButtonStyleReturn => {
	const { theme, isLoading = defaultIsLoading } = props;

	return {
		iconbutton: iconbutton({ theme }),
		active: active(),
		disabled: disabled({ isLoading })
	};
});
