import { Style } from '../../../../../../common/types';
import { size as defaultSize } from '../../../../FormControl/common/default/props';
import { getFormHelperTextFontSize } from '../../utils';

import { FormHelperTextStyleProps } from './types';

export default ({ theme, size = defaultSize }: FormHelperTextStyleProps): Style => {
	const fontSize = getFormHelperTextFontSize({ theme, size });

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
