import { Style } from '../../../../../../common/types';
import { handleIsTouchDevice } from '../../../../../../common/utils';
import { Radius, Theme } from '../../../../../../theme/types';
import { ButtonProps, Size, Variant } from '../../../types';
import { handleSize } from '../../utils';

const isTouchDevice: boolean = handleIsTouchDevice();

export default (
	theme: Theme,
	isFullWidth: ButtonProps['isFullWidth'] = false,
	sizeProp: Size,
	variant: Variant
): Style => {
	const size = handleSize(sizeProp);

	const border = size.border;
	const transform = size.transform[variant];
	const padding = size.padding;

	const radius: Radius =
		sizeProp === 'xs' || sizeProp === 'sm' ? 'xs' : sizeProp === 'lg' || sizeProp === 'xl' ? 'lg' : 'base';

	const transition = 'none';

	return {
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

		'opacity': 1,

		'border': '0 solid transparent',
		'borderBottom': `${transform}px solid transparent`,
		'borderRadius': theme.radii[radius],

		'outline': !isTouchDevice ? '0px auto' : 'none !important',

		'fontSize': sizeProp,
		'fontWeight': 'semibold',
		'textTransform': 'uppercase',
		'whiteSpace': 'nowrap',
		'lineHeight': 'normal',
		'letterSpacing': '.6px',

		'WebkitTapHighlightColor': 'transparent',

		'transform': variant !== 'text' ? 'translateY(0px)' : 'none',

		'px': `${theme.space[padding.x]} !important`,
		'py': `${theme.space[padding.y]} !important`,

		'transition': transition,

		'&::before': {
			content: '""',

			zIndex: -1,

			position: 'absolute',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,

			borderRadius: theme.radii[radius],
			borderTopWidth: `${variant !== 'text' ? border : 0}px`,
			borderLeftWidth: `${variant !== 'text' ? border : 0}px`,
			borderRightWidth: `${variant !== 'text' ? border : 0}px`,
			borderStyle: 'solid',
			borderColor: 'transparent',

			transition: transition
		},

		'&:focus:not(:focus-visible)': {
			outline: !isTouchDevice ? '0px auto' : 'none !important'
		},

		'&:focus': {
			boxShadow: 'none',
			outline: !isTouchDevice ? '0px auto' : 'none !important'
		},

		'&:active': {
			outline: !isTouchDevice ? '0px auto' : 'none !important',
			borderBottom: `${border}px solid transparent`,

			transform: variant !== 'text' ? `translateY(${border}px)` : 'none'
		},

		'& svg, .ds-cl-text': { fontSize: iconFontSize, userSelect: 'none' }
	};
};
