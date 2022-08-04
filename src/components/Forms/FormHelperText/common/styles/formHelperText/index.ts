
import { Style } from '../../../../../../common/types';
import { size as defaultSize } from '../../data/defaultPropValues';
import { getFontSize } from '../../utils';

import { FormHelperTextStyleProps } from './types';

export default ({ theme, size = defaultSize }: FormHelperTextStyleProps): Style => {
	const fontSize = getFontSize({ size });

	return {
		userSelect: 'none',

		fontSize: theme.fontSizes[fontSize],
		fontWeight: theme.fontWeights.normal,
		textTransform: 'none',
		lineHeight: theme.lineHeights.normal,

		opacity: 1,

		m: 0,
		p: 0,

		transition: 'none',
		transitionDuration: theme.transition.duration.normal,
		transitionTimingFunction: theme.transition.easing['ease-in-out']
	};
};
