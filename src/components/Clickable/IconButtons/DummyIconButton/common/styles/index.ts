import { memoize, merge } from 'lodash';

import {
	colorMode as defaultColorMode,
	isRound as defaultIsRound,
	size as defaultSize,
	variant as defaultVariant
} from '../../../common/data/defaultPropValues';

import dark from './dark';
import iconbutton from './iconbutton';
import light from './light';
import { DummyIconButtonStyleProps, DummyIconButtonStyleReturn } from './types';

export default memoize((props: DummyIconButtonStyleProps): DummyIconButtonStyleReturn => {
	const {
		theme,
		colorMode = defaultColorMode,
		isRound = defaultIsRound,
		size = defaultSize,
		variant = defaultVariant
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		iconbutton: merge(
			iconbutton.general({ theme, isRound, size }),
			iconbutton[variant]({ theme, isRound, size }),
			variant !== 'contained' ? scheme[variant]({ theme }) : {}
		)
	};
});
