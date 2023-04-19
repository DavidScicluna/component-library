import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import { Color } from '../../../../../../theme/types';
import {
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning} from '../../data/defaultPropValues';

import { FormHelperTextDarkStyleProps } from './types';

export default ({
	theme,
	isError = defaultIsError,
	isWarning = defaultIsWarning,
	isSuccess = defaultIsSuccess
}: FormHelperTextDarkStyleProps): Style => {
	const shade = getHue({
		colorMode: 'dark',
		type: 'text.secondary'
	});

	const color: Color = isError ? 'red' : isWarning ? 'yellow' : isSuccess ? 'green' : 'gray';

	return {
		color: theme.colors[color][shade]
	};
};
