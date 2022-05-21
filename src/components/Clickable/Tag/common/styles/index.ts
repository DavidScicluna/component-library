import { memoize, merge } from 'lodash';

import active from './active';
import dark from './dark';
import disabled from './disabled';
import light from './light';
import tag from './tag';
import { TagStyleProps, TagStyleReturn } from './types';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isClickable as defaultIsClickable,
	isFullWidth as defaultIsFullWidth,
	size as defaultSize,
	variant as defaultVariant
} from '../data/defaultPropValues';

export default memoize((props: TagStyleProps): TagStyleReturn => {
	const {
		theme,
		color = defaultColor,
		colorMode = defaultColorMode,
		isClickable = defaultIsClickable,
		isFullWidth = defaultIsFullWidth,
		size = defaultSize,
		variant = defaultVariant
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		tag: merge(
			tag.general({ theme, isFullWidth, isClickable, size }),
			tag[variant]({ theme, isFullWidth, isClickable, size }),
			scheme.tag[variant]({ theme, color, isClickable })
		),
		active: merge(active[variant]({ theme, size }), scheme.active[variant]({ theme, color, size })),
		disabled: merge(
			disabled.general(),
			disabled[variant]({ theme, size }),
			scheme.disabled[variant]({ theme, size })
		)
	};
});
