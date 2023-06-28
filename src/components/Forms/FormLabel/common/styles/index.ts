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
import formlabel from './formLabel';
import light from './light';
import { FormLabelStyleProps, FormLabelStyleReturn } from './types';

export default memoize((props: FormLabelStyleProps): FormLabelStyleReturn => {
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
		formLabel: merge(
			formlabel({ theme, size }),
			scheme({
				theme,
				isError,
				isWarning,
				isSuccess
			})
		)
	};
});
