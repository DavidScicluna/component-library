import { Style } from '../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../common/utils';
import { Theme } from '../../../../../../theme/types';
import { handleHue } from '../../utils';
import { LinkStyleProps } from '../types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default (
	theme: Theme,
	color: LinkStyleProps['color'],
	colorMode: LinkStyleProps['colorMode'],
	isFullWidth: LinkStyleProps['isFullWidth'] = false,
	isString: LinkStyleProps['isString'] = false
): Style => {
	const shade = handleHue(colorMode, color);

	return {
		'cursor': 'pointer',

		'width': isFullWidth ? '100%' : 'auto',
		'height': 'auto',

		'minWidth': 'auto',
		'minHeight': 'auto',
		'maxWidth': 'none',
		'maxHeight': 'none',

		'userSelect': 'none',

		'opacity': 1,

		'border': '0 solid transparent',

		'outline': !isTouchDevice ? '0px transparent' : 'none !important',

		'textDecorationColor': theme.colors.transparent,
		'textDecorationStyle': 'wavy',
		'textDecorationThickness': 'from-font',
		// 'fontSize': fontSize,
		// 'fontWeight': 'semibold',
		// 'textTransform': 'uppercase',
		// 'whiteSpace': 'nowrap',
		// 'lineHeight': 'normal',
		// 'letterSpacing': '.6px',

		'WebkitTapHighlightColor': 'transparent',

		'transition': 'none',

		'&:hover': {
			textDecorationColor: isString ? theme.colors[color][shade] : theme.colors.transparent
		},

		'&:focus:not(:focus-visible)': {
			outline: !isTouchDevice ? '0px transparent' : 'none !important'
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `2px auto ${theme.colors[color][shade]}` : 'none',
			outlineOffset: !isTouchDevice ? '4px' : 0
		},

		'&:focus': {
			boxShadow: 'none',
			outline: !isTouchDevice ? '0px transparent' : 'none !important'
		},

		'&:active': {
			outline: !isTouchDevice ? '0px transparent' : 'none !important'
		}
	};
};
