import { Style } from '../../../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../../../common/utils';
import { getSizeConfig } from '../../utils';

import { CalendarDayStyleProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme }: CalendarDayStyleProps): Style => {
	const config = getSizeConfig();
	const { width } = config;
	const { height } = config;
	const { border } = config;

	return {
		'cursor': 'pointer',

		'position': 'relative',

		'width': `${width}px`,
		'height': `${height}px`,

		'minWidth': 'auto',
		'minHeight': 'auto',
		'maxWidth': 'none',
		'maxHeight': 'none',

		'display': 'inline-flex',
		'alignItems': 'center',
		'justifyContent': 'center',

		'pointerEvents': 'auto',

		'userSelect': 'none',
		'willChange': 'auto',

		'opacity': 1,

		'outline': !isTouchDevice ? `0px ${theme.colors.transparent}` : 'none !important',

		'background': 'none',
		'borderWidth': `${border}px`,
		'borderStyle': 'solid',
		'borderColor': theme.colors.transparent,
		'borderRadius': theme.radii.full,

		'fontSize': theme.fontSizes.md,
		'fontWeight': theme.fontWeights.medium,
		'textTransform': 'uppercase',
		'whiteSpace': 'nowrap',
		'lineHeight': theme.lineHeights.normal,
		'letterSpacing': '.6px',

		'WebkitTapHighlightColor': theme.colors.transparent,

		'transform': 'none',

		'&:focus:not(:focus-visible)': {
			outline: !isTouchDevice ? `0px ${theme.colors.transparent}` : 'none !important'
		},

		'&:focus': {
			boxShadow: 'none',
			outline: !isTouchDevice ? `0px ${theme.colors.transparent}` : 'none !important'
		},

		'&:active': {
			outline: !isTouchDevice ? `0px ${theme.colors.transparent}` : 'none !important'
		}
	};
};
