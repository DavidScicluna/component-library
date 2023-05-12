import { Style } from '../../../../../../common/types';
import { size as defaultSize } from '../../../../FormControl/common/default/props';

import { InputStyleProps } from './types';

export default ({ theme, size = defaultSize }: InputStyleProps): Style => ({
	'cursor': 'text',

	'width': '100%',
	'height': '100%',

	'minWidth': '100%',
	'minHeight': '100%',
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
	'lineHeight': theme.lineHeights.base,
	'letterSpacing': '.6px',

	'WebkitTapHighlightColor': theme.colors.transparent,

	'p': 0,
	'm': 0,

	'&:focus': { boxShadow: 'none' }
});
