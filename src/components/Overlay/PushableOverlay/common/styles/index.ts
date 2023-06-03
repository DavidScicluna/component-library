import { merge } from 'lodash-es';
import memoize from 'micro-memoize';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../common/default/props';
import {
	borderRadius as defaultBorderRadius,
	isActive as defaultIsActive,
	isDisabled as defaultIsDisabled,
	isFixed as defaultIsFixed,
	isPushable as defaultIsPushable,
	variant as defaultVariant
} from '../default/props';

import active from './active';
import dark from './dark';
import disabled from './disabled';
import light from './light';
import pushable from './pushable';
import { PushableOverlayStyleProps, PushableOverlayStyleReturn } from './types';

export default memoize((props: PushableOverlayStyleProps): PushableOverlayStyleReturn => {
	const {
		theme,
		borderRadius = defaultBorderRadius,
		color = defaultColor,
		colorMode = defaultColorMode,
		isActive = defaultIsActive,
		isDisabled = defaultIsDisabled,
		isFixed = defaultIsFixed,
		isPushable = defaultIsPushable,
		variant = defaultVariant
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		pushable: merge(
			pushable.general({ theme, borderRadius, isFixed, isPushable }),
			isPushable ? pushable[variant]({ theme, borderRadius, isFixed, isPushable }) : {},
			scheme.pushable[variant]({ theme, color, isFixed, isPushable })
		),
		active:
			isPushable && !isFixed && isActive
				? merge(active.general(), active[variant](), scheme.active[variant]({ theme, color }))
				: {},
		disabled:
			isPushable && isDisabled
				? merge(disabled.general(), disabled[variant](), scheme.disabled[variant]({ theme, color }))
				: {}
	};
});
