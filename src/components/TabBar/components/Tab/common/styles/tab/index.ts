import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';

const isTouchDevice: boolean = checkIsTouchDevice();

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

	'outline': !isTouchDevice ? '0px transparent' : 'none !important',

	'WebkitTapHighlightColor': 'transparent',

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
