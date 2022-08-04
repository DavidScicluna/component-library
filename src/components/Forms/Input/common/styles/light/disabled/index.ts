import { transparentize } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { getAmount } from '../../../utils';

import { InputLightDisabledStyleProps } from './types';

export default ({ theme }: InputLightDisabledStyleProps): Style => {
	const amount = getAmount();
	const textPrimaryShade = getHue({
		colorMode: 'light',
		type: 'text.primary'
	});
	const textSecondaryShade = getHue({
		colorMode: 'light',
		type: 'text.secondary'
	});
	const borderShade = getHue({
		colorMode: 'light',
		type: 'divider'
	});

	return {
		'color': `${theme.colors.gray[textPrimaryShade]} !important`,
		'borderColor': `${theme.colors.gray[borderShade]} !important`,
		'backgroundColor': `${theme.colors.transparent} !important`,
		'background': `${theme.colors.transparent} !important`,

		'& input::placeholder': {
			color: `${transparentize(theme.colors.gray[textSecondaryShade], amount.placeholder)} !important`
		}
	};
};
