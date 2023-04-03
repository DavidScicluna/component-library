import { merge } from 'lodash';
import memoize from 'memoizee';

import {
	colorMode as defaultColorMode,
	isError as defaultIsError,
	isWarning as defaultIsWarning,
	isSuccess as defaultIsSuccess,
	size as defaultSize
} from '../data/defaultPropValues';

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
