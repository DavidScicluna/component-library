import { Style } from '../../../../../../common/types';
import { size as defaultSize } from '../../data/defaultPropValues';
import { getFontSize } from '../../utils';

import { FormLabelStyleProps } from './types';

export default ({ theme, size = defaultSize }: FormLabelStyleProps): Style => {
	const fontSize = getFontSize({ size });

	return {
		userSelect: 'none',

		fontSize: theme.fontSizes[fontSize],
		fontWeight: theme.fontWeights.semibold,
		textTransform: 'capitalize',
		whiteSpace: 'nowrap',
		lineHeight: theme.lineHeights.normal,
		letterSpacing: '.8px',

		opacity: 1,

		m: 0,
		p: 0,

		transition: 'none',
		transitionDuration: theme.transition.duration.normal,
		transitionTimingFunction: theme.transition.easing['ease-in-out']
	};
};
