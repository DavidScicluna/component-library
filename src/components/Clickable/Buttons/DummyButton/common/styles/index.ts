import { memoize, merge } from 'lodash';

import {
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth,
	size as defaultSize,
	variant as defaultVariant
} from '../../../common/data/defaultPropValues';

import button from './button';
import dark from './dark';
import light from './light';
import { DummyButtonStyleProps, DummyButtonStyleReturn } from './types';

export default memoize((props: DummyButtonStyleProps): DummyButtonStyleReturn => {
	const {
		theme,
		colorMode = defaultColorMode,
		isFullWidth = defaultIsFullWidth,
		size = defaultSize,
		variant = defaultVariant
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		button: merge(
			button.general({ theme, isFullWidth, size }),
			button[variant]({ theme, isFullWidth, size }),
			variant !== 'contained' ? scheme[variant]({ theme }) : {}
		)
	};
});
