import { transparentize } from 'color2k';

import { placeholder } from '../../../../../../../common/default/amount';
import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';

import { TextareaDarkDisabledStyleProps } from './types';

export default ({ theme }: TextareaDarkDisabledStyleProps): Style => {
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

	return {
		'color': theme.colors.gray[textPrimaryShade],
		'borderColor': theme.colors.gray[borderShade],
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'& textarea::placeholder': {
			color: transparentize(theme.colors.gray[textSecondaryShade], placeholder)
		}
	};
};
