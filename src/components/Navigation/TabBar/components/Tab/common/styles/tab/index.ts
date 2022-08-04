
import { Style } from '../../../../../../../../common/types';
import { isActive as defaultIsActive } from '../../data/defaultPropValues';

import { TabStyleProps } from './types';

export default ({ theme, isActive = defaultIsActive }: TabStyleProps): Style => ({
	'cursor': isActive ? 'default' : 'pointer',

	'width': '100%',
	'height': 'auto',

	'minWidth': 'auto',
	'minHeight': 'auto',
	'maxWidth': 'none',
	'maxHeight': 'none',

	'pointerEvents': isActive ? 'none' : 'auto',

	'userSelect': 'none',

	'opacity': 1,

	'flex': 1,

	'p': theme.space['1.5'],

	'border': '0 solid transparent',

	'outline': 'none !important',

	'WebkitTapHighlightColor': theme.colors.transparent,

	'&:focus': { boxShadow: 'none' }
});
