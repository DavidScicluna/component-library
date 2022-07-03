import { TooltipStyleProps } from './types';

import { Style } from '../../../../../../common/types';

export default ({ theme }: TooltipStyleProps): Style => ({
	'width': 'auto',
	'height': 'auto',

	'minWidth': 'auto',
	'minHeight': 'auto',
	'maxWidth': '320px',
	'maxHeight': 'none',

	'display': 'inline-flex',

	'userSelect': 'none',
	'willChange': 'auto',

	'opacity': 1,

	'background': 'none',
	'boxShadow': theme.shadows.md,
	'borderRadius': theme.radii.base,

	'fontSize': theme.fontSizes.sm,
	'fontWeight': theme.fontWeights.medium,
	'lineHeight': theme.lineHeights.base,

	'px': `${theme.space[1]} !important`,
	'py': `${theme.space[0.5]} !important`,

	'& .chakra-tooltip__arrow': {
		boxShadow: theme.shadows.md
	}
});
