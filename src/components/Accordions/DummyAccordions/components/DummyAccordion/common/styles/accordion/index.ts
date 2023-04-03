import { Style } from '../../../../../../../../common/types';
import { Radius } from '../../../../../../../../theme/types';
import { isFullWidth as defaultIsFullWidth } from '../../../../../../common/data/defaultPropValues';
import { getSizeConfig } from '../../utils';

import { DummyAccordionStyleProps } from './types';

export default ({ theme, isFullWidth = defaultIsFullWidth }: DummyAccordionStyleProps): Style => {
	const config = getSizeConfig();
	const border = config.border;

	const radius: Radius = 'lg';

	return {
		'cursor': 'default',

		'pointerEvents': 'none',

		'position': 'relative',

		'width': isFullWidth ? '100%' : 'auto',
		'height': 'auto',

		'minWidth': 'auto',
		'minHeight': 'auto',
		'maxWidth': 'none',
		'maxHeight': 'none',

		'display': 'inline-flex',

		'userSelect': 'none',

		'opacity': 0.5,

		'background': 'none',
		'borderTopWidth': `${border}px`,
		'borderBottomWidth': `${border}px`,
		'borderStyle': 'solid',
		'borderColor': theme.colors.transparent,
		'borderRadius': theme.radii[radius],

		'transform': 'none',

		'&::before': {
			content: '""',

			zIndex: 0,

			position: 'absolute',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,

			borderTopWidth: `${border}px`,
			borderLeftWidth: `${border}px`,
			borderRightWidth: `${border}px`,
			borderStyle: 'solid',
			borderColor: theme.colors.transparent,
			borderRadius: theme.radii[radius]
		},

		'&:focus': {
			boxShadow: 'none'
		}
	};
};
