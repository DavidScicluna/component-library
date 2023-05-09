import memoize from 'micro-memoize';

import { isClickable as defaultIsClickable, isFullWidth as defaultIsFullWidth } from '../default/props';

import active from './active';
import badge from './badge';
import disabled from './disabled';
import { BadgeStyleProps, BadgeStyleReturn } from './types';

export default memoize((props: BadgeStyleProps): BadgeStyleReturn => {
	const { theme, isClickable = defaultIsClickable, isFullWidth = defaultIsFullWidth } = props;

	return {
		badge: badge({ theme, isClickable, isFullWidth }),
		active: active(),
		disabled: disabled()
	};
});
