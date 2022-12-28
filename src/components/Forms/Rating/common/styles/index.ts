import { memoize, merge } from 'lodash';

import {
	colorMode as defaultColorMode,
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	isFullWidth as defaultIsFullWidth,
	size as defaultSize,
	variant as defaultVariant
} from '../data/defaultPropValues';

import dark from './dark';
import group from './group';
import light from './light';
import { RatingStyleProps, RatingStyleReturn } from './types';

export default memoize((props: RatingStyleProps): RatingStyleReturn => {
	const {
		theme,
		colorMode = defaultColorMode,
		isError = defaultIsError,
		isSuccess = defaultIsSuccess,
		isWarning = defaultIsWarning,
		isFullWidth = defaultIsFullWidth,
		size = defaultSize,
		variant = defaultVariant
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		group: merge(
			group({ theme, isFullWidth, size, variant }),
			scheme[variant]({ theme, isError, isSuccess, isWarning })
		)
	};
});
