import { TooltipStyleProps } from './types';

import { Style } from '../../../../../common/types';

export default ({ theme }: TooltipStyleProps): Style => ({
	'width': 'auto',
	'height': 'auto',

	'minWidth': 'auto',
	'minHeight': 'auto',
	'maxWidth': 'none',
	'maxHeight': 'none',

	'background': 'none',
	'boxShadow': theme.shadows.base,
	'borderRadius': theme.radii.sm,

	'fontSize': theme.fontSizes.sm,
	'fontWeight': theme.fontWeights.medium,
	'lineHeight': theme.lineHeights.normal,

	'px': `${theme.space[1]} !important`,
	'py': `${theme.space[0.5]} !important`,

	'& .chakra-tooltip__arrow': {
		boxShadow: `${theme.shadows.base} !important`
	}
});
