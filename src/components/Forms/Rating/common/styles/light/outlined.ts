import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import { Color } from '../../../../../../theme/types';
import {
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning
} from '../../data/defaultPropValues';

import { RatingLightStyleProps } from './types';

export default ({
	theme,
	isError = defaultIsError,
	isSuccess = defaultIsSuccess,
	isWarning = defaultIsWarning
}: RatingLightStyleProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type: 'text.primary'
	});
	const borderShade = getHue({
		colorMode: 'light',
		type: isError || isSuccess || isWarning ? 'color' : 'divider'
	});

	const color: Color = isError ? 'red' : isSuccess ? 'green' : isWarning ? 'yellow' : 'gray';

	return {
		color: theme.colors[color][colorShade],
		borderColor: theme.colors[color][borderShade],
		backgroundColor: theme.colors.transparent,
		background: theme.colors.transparent
	};
};