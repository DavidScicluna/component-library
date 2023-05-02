import { Style } from '../../../../../../common/types';

import { LinkStyleProps } from './types';

export default ({ theme }: LinkStyleProps): Style => ({
	'cursor': 'pointer',

	'textDecoration': 'none',

	'userSelect': 'none',
	'willChange': 'auto',

	'pointerEvents': 'auto',

	'background': 'none',

	'WebkitTapHighlightColor': theme.colors.transparent,

	'transform': 'none',

	'&:focus': {
		boxShadow: 'none'
	}
});
