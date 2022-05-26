import { memoize, merge } from 'lodash';

import dark from './dark';
import disabled from './disabled';
import group from './group';
import input from './input';
import light from './light';
import readOnly from './readOnly';
import { InputStyleProps, InputStyleReturn } from './types';

import {
	colorMode as defaultColorMode,
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	isFocused as defaultIsFocused,
	isFullWidth as defaultIsFullWidth,
	size as defaultSize
} from '../data/defaultPropValues';

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
		size = defaultSize
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		group: merge(
			group({ theme, isFullWidth, size }),
			isError || isSuccess || isWarning || isFocused
				? scheme.focused({
						theme,
						color,
						isError,
						isSuccess,
						isWarning
				  })
				: scheme.group({ theme })
		),
		disabled: merge(disabled(), scheme.disabled({ theme })),
		readOnly: merge(readOnly(), scheme.readOnly({ theme })),
		input: input({ theme, size })
	};
});
