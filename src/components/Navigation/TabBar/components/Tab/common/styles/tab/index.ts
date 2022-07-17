import { Style } from '../../../../../../../../common/types';

export default (): Style => ({
	'cursor': 'pointer',

	'width': '100%',
	'height': 'auto',

	'minWidth': 'auto',
	'minHeight': 'auto',
	'maxWidth': 'none',
	'maxHeight': 'none',

	'pointerEvents': 'auto',

	'userSelect': 'none',

	'opacity': 1,

	'flex': 1,

	'p': 1.5,

	'border': '0 solid transparent',

	'outline': 'none !important',

	'WebkitTapHighlightColor': 'transparent',

	'&:focus': { boxShadow: 'none' }
});
