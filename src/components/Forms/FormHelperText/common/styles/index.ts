import { merge } from 'lodash-es';
import memoize from 'micro-memoize';

import { colorMode as defaultColorMode } from '../../../../../common/default/props';
import {
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	size as defaultSize
} from '../../../FormControl/common/default/props';

import dark from './dark';
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
		formHelperText: merge(formHelperText({ theme, size }), scheme({ theme, isError, isWarning, isSuccess }))
	};
});
