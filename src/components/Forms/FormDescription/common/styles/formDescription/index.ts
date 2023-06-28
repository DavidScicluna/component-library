import { Style } from '../../../../../../common/types';
import { size as defaultSize } from '../../../../FormControl/common/default/props';
import { getFormDescriptionFontSize } from '../../utils';

import { FormDescriptionStyleProps } from './types';

export default ({ theme, size = defaultSize }: FormDescriptionStyleProps): Style => {
	const fontSize = getFormDescriptionFontSize({ theme, size });

	const transition = 'none';
	const transitionProperty = transition;
	const transitionDuration = transition;
	const transitionTimingFunction = transition;

	return {
		userSelect: 'none',

		fontSize,
		fontWeight: theme.fontWeights.normal,
		whiteSpace: 'wrap',
		textTransform: 'none',
		lineHeight: theme.lineHeights.shorter,

		m: 0,
		p: 0,

		transition,
		transitionProperty,
		transitionDuration,
		transitionTimingFunction
	};
};
