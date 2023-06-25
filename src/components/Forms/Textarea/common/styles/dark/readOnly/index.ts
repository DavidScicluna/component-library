import { transparentize } from 'color2k';

import { placeholder } from '../../../../../../../common/default/amount';
import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';

import { TextareaDarkReadOnlyStyleProps } from './types';

export default ({ theme }: TextareaDarkReadOnlyStyleProps): Style => {
	const textPrimaryShade = getHue({
		colorMode: 'dark',
		type: 'text.primary'
	});
	const textSecondaryShade = getHue({
		colorMode: 'dark',
		type: 'text.secondary'
	});
	const borderShade = getHue({
		colorMode: 'dark',
		type: 'divider'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: 'darker'
	});

	return {
		'color': theme.colors.gray[textPrimaryShade],
		'borderColor': theme.colors.gray[borderShade],
		'backgroundColor': theme.colors.gray[backgroundShade],
		'background': theme.colors.gray[backgroundShade],

		'& textarea::placeholder': {
			color: transparentize(theme.colors.gray[textSecondaryShade], placeholder)
		}
	};
};
