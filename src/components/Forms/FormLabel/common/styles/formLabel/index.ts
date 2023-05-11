import { Style } from '../../../../../../common/types';
import { size as defaultSize } from '../../../../FormControl/common/default/props';
import { getFormLabelFontSize } from '../../utils';

import { FormLabelStyleProps } from './types';

export default ({ theme, size = defaultSize }: FormLabelStyleProps): Style => {
	const fontSize = getFormLabelFontSize({ size });

	const transition = 'none';
	const transitionProperty = transition;
	const transitionDuration = transition;
	const transitionTimingFunction = transition;

	return {
		userSelect: 'none',

		fontSize: theme.fontSizes[fontSize],
		fontWeight: theme.fontWeights.semibold,
		whiteSpace: 'wrap',
		textTransform: 'capitalize',
		lineHeight: theme.lineHeights.shorter,

		m: 0,
		p: 0,

		transition: transition,
		transitionProperty: transitionProperty,
		transitionDuration: transitionDuration,
		transitionTimingFunction: transitionTimingFunction
	};
};
