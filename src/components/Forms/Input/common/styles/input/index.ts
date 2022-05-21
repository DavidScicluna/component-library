import { InputStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { size as defaultSize } from '../../data/defaultPropValues';

export default ({ theme, size = defaultSize }: InputStyleProps): Style => ({
	'cursor': 'text',

	'width': 'auto',
	'height': 'auto',

	'minWidth': 'auto',
	'minHeight': 'auto',
	'maxWidth': 'none',
	'maxHeight': 'none',

	'userSelect': 'none',

	'flex': 1,

	'border': '0 solid',
	'borderRadius': 'none',

	'fontSize': theme.fontSizes[size],
	'fontWeight': theme.fontWeights.normal,
	'textTransform': 'none',
	'whiteSpace': 'nowrap',
	'lineHeight': theme.lineHeights.normal,
	'letterSpacing': '.6px',

	'WebkitTapHighlightColor': theme.colors.transparent,

	'p': 0,
	'm': 0,

	'transition': 'none',
	'transitionDuration': theme.transition.duration.normal,
	'transitionTimingFunction': theme.transition.easing['ease-in-out'],

	'&:focus': {
		boxShadow: 'none'
	}
});
