import { Style } from '../../../../../common/types';
import { border } from '../../default/sizes';

import { IconStyleProps } from './types';

export default ({ theme }: IconStyleProps): Style => {
	const transition = 'none';
	const transitionProperty = transition;
	const transitionDuration = transition;
	const transitionTimingFunction = transition;

	return {
		cursor: 'default',

		position: 'relative',

		userSelect: 'none',
		willChange: 'auto',

		pointerEvents: 'none',

		opacity: 1,

		background: 'none',
		borderWidth: `${border}px`,
		borderStyle: 'solid',
		borderColor: theme.colors.transparent,

		WebkitTapHighlightColor: theme.colors.transparent,

		transform: 'none',

		transition: transition,
		transitionProperty: transitionProperty,
		transitionDuration: transitionDuration,
		transitionTimingFunction: transitionTimingFunction
	};
};
