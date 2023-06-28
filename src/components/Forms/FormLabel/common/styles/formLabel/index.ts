import { Style } from '../../../../../../common/types';
import { size as defaultSize } from '../../../../FormControl/common/default/props';

import { FormLabelStyleProps } from './types';

export default ({ theme, size = defaultSize }: FormLabelStyleProps): Style => {
	const transition = 'none';
	const transitionProperty = transition;
	const transitionDuration = transition;
	const transitionTimingFunction = transition;

	return {
		userSelect: 'none',

		fontSize: theme.fontSizes[size],
		fontWeight: theme.fontWeights.semibold,
		whiteSpace: 'wrap',
		textTransform: 'capitalize',
		lineHeight: theme.lineHeights.shorter,

		m: 0,
		p: 0,

		transition,
		transitionProperty,
		transitionDuration,
		transitionTimingFunction
	};
};
