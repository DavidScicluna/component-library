import { Style } from '../../../../../../../common/types';
import { handleIsTouchDevice } from '../../../../../../../common/utils';

const isTouchDevice: boolean = handleIsTouchDevice();

export default (): Style => ({
	'cursor': 'pointer',

	'width': '100%',
	'height': 'auto',

	'minWidth': 'auto',
	'minHeight': 'auto',
	'maxWidth': 'none',
	'maxHeight': 'none',

	'userSelect': 'none',

	'opacity': 1,

	'border': '0 solid transparent',

	'outline': !isTouchDevice ? '0px auto' : 'none !important',

	// 'fontSize': sizeProp,
	// 'fontWeight': 'semibold',
	// 'textTransform': 'uppercase',
	// 'whiteSpace': 'nowrap',
	// 'lineHeight': 'normal',
	// 'letterSpacing': '.6px',

	'WebkitTapHighlightColor': 'transparent',

	'&:focus:not(:focus-visible)': {
		outline: !isTouchDevice ? '0px auto' : 'none !important'
	},

	'&:focus': {
		boxShadow: 'none',
		outline: !isTouchDevice ? '0px auto' : 'none !important'
	},

	'&:active': {
		outline: !isTouchDevice ? '0px auto' : 'none !important'
	}
});
