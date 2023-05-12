import { merge } from 'lodash-es';
import memoize from 'micro-memoize';

import { colorMode as defaultColorMode } from '../../../../../common/default/props';
import {
	isError as defaultIsError,
	isFocused as defaultIsFocused,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	size as defaultSize
} from '../../../FormControl/common/default/props';

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
		size = defaultSize
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		group: merge(
			group({ theme }),
			isError || isSuccess || isWarning || isFocused
				? scheme.focused({ theme, color, isError, isSuccess, isWarning })
				: scheme.group({ theme })
		),
		disabled: merge(disabled(), scheme.disabled({ theme })),
		readOnly: merge(readOnly(), scheme.readOnly({ theme })),
		input: input({ theme, size })
	};
});
