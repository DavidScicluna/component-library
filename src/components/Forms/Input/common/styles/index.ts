import { merge } from 'lodash';
import memoize from 'micro-memoize';

import {
	colorMode as defaultColorMode,
	isError as defaultIsError,
	isFocused as defaultIsFocused,
	isFullWidth as defaultIsFullWidth,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	size as defaultSize,
	variant as defaultVariant
} from '../data/defaultPropValues';

import dark from './dark';
import disabled from './disabled';
import group from './group';
import input from './input';
import light from './light';
import readOnly from './readOnly';
import { InputStyleProps, InputStyleReturn } from './types';

export default memoize((props: InputStyleProps): InputStyleReturn => {
	const {
		theme,
		color,
		colorMode = defaultColorMode,
		isError = defaultIsError,
		isSuccess = defaultIsSuccess,
		isWarning = defaultIsWarning,
		isFocused = defaultIsFocused,
		isFullWidth = defaultIsFullWidth,
		size = defaultSize,
		variant = defaultVariant
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		group: merge(
			group({ theme, isFullWidth, size }),
			isError || isSuccess || isWarning || isFocused
				? scheme[variant].focused({
						theme,
						color,
						isError,
						isSuccess,
						isWarning
				  })
				: scheme[variant].group({ theme })
		),
		disabled: merge(disabled(), scheme[variant].disabled({ theme })),
		readOnly: merge(readOnly(), scheme[variant].readOnly({ theme })),
		input: input({ theme, size })
	};
});
