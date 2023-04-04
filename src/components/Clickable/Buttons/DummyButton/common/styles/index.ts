import { merge } from 'lodash';
import memoize from 'micro-memoize';

import {
	colorMode as defaultColorMode,
	isFullWidth as defaultIsFullWidth,
	isRound as defaultIsRound,
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
		isRound = defaultIsRound,
		size = defaultSize,
		variant = defaultVariant
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		button: merge(
			button.general({ theme, isFullWidth, isRound, size }),
			button[variant]({ theme, isFullWidth, isRound, size }),
			variant !== 'contained' ? scheme[variant]({ theme }) : {}
		)
	};
});
