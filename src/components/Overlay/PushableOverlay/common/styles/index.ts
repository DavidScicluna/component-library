import { merge } from 'lodash-es';
import memoize from 'micro-memoize';

import {
	borderRadius as defaultBorderRadius,
	color as defaultColor,
	colorMode as defaultColorMode,
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
		variant = defaultVariant
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		pushable: merge(
			pushable.general({ theme, borderRadius }),
			pushable[variant](),
			scheme.pushable[variant]({ theme, color })
		),
		active: merge(active.general(), active[variant](), scheme.active[variant]({ theme, color })),
		disabled: merge(disabled.general(), disabled[variant]())
	};
});
