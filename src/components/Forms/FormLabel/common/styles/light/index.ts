import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import { Color } from '../../../../../../theme/types';
import {
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning
} from '../../../../FormControl/common/default/props';

import { FormLabelLightStyleProps } from './types';

export default ({
	theme,
	isError = defaultIsError,
	isWarning = defaultIsWarning,
	isSuccess = defaultIsSuccess
}: FormLabelLightStyleProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type: 'text.primary'
	});
	const indicatorShade = getHue({
		colorMode: 'light',
		type: 'color'
	});

	const color: Color = isError ? 'red' : isWarning ? 'yellow' : isSuccess ? 'green' : 'red';

	return {
		'color': theme.colors.gray[colorShade],

		'& .ds-cl-form-label-required-indicator': {
			color: theme.colors[color][indicatorShade]
		}
	};
};
