
import { Style } from '../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../common/utils';
import { isFullWidth as defaultFullWidth } from '../../data/defaultPropValues';

import { LinkStyleProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, isFullWidth = defaultFullWidth, isString = false }: LinkStyleProps): Style => ({
	'cursor': 'pointer',

	'position': 'relative',

	'width': isFullWidth ? '100%' : 'auto',
	'height': 'auto',

	'minWidth': 'auto',
	'minHeight': 'auto',
	'maxWidth': 'none',
	'maxHeight': 'none',

	'display': 'inline-flex',

	'userSelect': 'none',
	'willChange': 'auto',

	'textDecoration': `${isString ? 'underline' : 'none'} !important`,

	'outline': !isTouchDevice ? '0px transparent' : 'none !important',

	'background': 'none',

	'WebkitTapHighlightColor': theme.colors.transparent,

	'transform': 'none',

	'&:focus:not(:focus-visible)': {
		outline: !isTouchDevice ? '0px transparent' : 'none !important'
	},

	'&:focus': {
		boxShadow: 'none',
		outline: !isTouchDevice ? '0px transparent' : 'none !important'
	},

	'&:active': {
		outline: !isTouchDevice ? '0px transparent' : 'none !important'
	}
});
