import { transparentize } from 'color2k';

import { InputLightReadOnlyStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { getAmount } from '../../../utils';

export default ({ theme }: InputLightReadOnlyStyleProps): Style => {
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
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'light'
	});

	return {
		'color': `${theme.colors.gray[textPrimaryShade]} !important`,
		'borderColor': `${theme.colors.gray[borderShade]} !important`,
		'backgroundColor': `${theme.colors.gray[backgroundShade]} !important`,
		'background': `${theme.colors.gray[backgroundShade]} !important`,

		'& input::placeholder': {
			color: `${transparentize(theme.colors.gray[textSecondaryShade], amount.placeholder)} !important`
		}
	};
};
