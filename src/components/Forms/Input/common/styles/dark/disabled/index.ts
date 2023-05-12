import { transparentize } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { placeholder } from '../../../default/amount';

import { InputDarkDisabledStyleProps } from './types';

export default ({ theme }: InputDarkDisabledStyleProps): Style => {
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

		'& input::placeholder': {
			color: transparentize(theme.colors.gray[textSecondaryShade], placeholder)
		}
	};
};