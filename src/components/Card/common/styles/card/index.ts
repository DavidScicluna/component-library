import { Style } from '../../../../../common/types';
import { handleIsTouchDevice } from '../../../../../common/utils';
import { Theme, Radius } from '../../../../../theme/types';
import { Variant } from '../../../types';
import { handleSize } from '../../utils';
import { CardStyleProps } from '../types';

const isTouchDevice: boolean = handleIsTouchDevice();

export default (
	theme: Theme,
	isFullWidth: CardStyleProps['isFullWidth'] = false,
	isClickable: CardStyleProps['isClickable'] = false,
	isFixed: CardStyleProps['isFixed'] = false,
	variant: Variant
): Style => {
	const size = handleSize();

	const border = size.border;
	const transform = size.transform;

	const radius: Radius = 'lg';

	const transition = 'none';

	return {
		'cursor': !isFixed && isClickable ? 'pointer' : 'default',

		'position': 'relative',

		'width': isFullWidth ? '100%' : 'auto',
		'height': 'auto',

		'minWidth': 'auto',
		'minHeight': 'auto',
		'maxWidth': 'none',
		'maxHeight': 'none',

		'userSelect': 'none',
		'willChange': 'auto',

		'opacity': 1,

		'border': '0 solid transparent',
		'borderBottom': `${variant !== 'transparent' && isClickable ? transform : 0}px solid transparent`,
		'borderRadius': theme.radii[radius],

		'outline': !isTouchDevice ? '0px auto' : 'none !important',

		'WebkitTapHighlightColor': 'transparent',

		'transform': variant !== 'transparent' && isClickable ? 'translateY(0px)' : 'none',

		'p': variant === 'transparent' ? '0 !important' : 0,

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
			borderTopWidth: `${variant !== 'transparent' ? border : 0}px`,
			borderBottomWidth: !isClickable ? `${variant !== 'transparent' ? border : 0}px` : undefined,
			borderLeftWidth: `${variant !== 'transparent' ? border : 0}px`,
			borderRightWidth: `${variant !== 'transparent' ? border : 0}px`,
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
			borderBottom: `${variant !== 'transparent' && isClickable ? border : 0}px solid transparent`,

			transform: variant !== 'transparent' && isClickable ? `translateY(${border}px)` : 'none'
		},

		'*, *::before, *::after': { transition }
	};
};
