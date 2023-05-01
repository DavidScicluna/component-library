import { merge } from 'lodash-es';
import memoize from 'micro-memoize';

import {
	colorMode as defaultColorMode,
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	size as defaultSize
} from '../default/props';

import dark from './dark';
import disabled from './disabled';
import formHelperText from './formHelperText';
import light from './light';
import { FormHelperTextStyleProps, FormHelperTextStyleReturn } from './types';

export default memoize((props: FormHelperTextStyleProps): FormHelperTextStyleReturn => {
	const {
		theme,
		colorMode = defaultColorMode,
		isError = defaultIsError,
		isWarning = defaultIsWarning,
		isSuccess = defaultIsSuccess,
		size = defaultSize
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		formHelperText: merge(
			formHelperText({ theme, size }),
			scheme.formHelperText({ theme, isError, isWarning, isSuccess })
		),
		disabled: disabled(),
		readOnly: scheme.readOnly({ theme })
	};
});
