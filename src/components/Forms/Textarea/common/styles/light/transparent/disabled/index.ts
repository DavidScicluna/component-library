import { transparentize } from 'color2k';

import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';
import { getAmount } from '../../../../utils';

import { TextareaLightTransparentDisabledStyleProps } from './types';

export default ({ theme }: TextareaLightTransparentDisabledStyleProps): Style => {
	const amount = getAmount();

	const textPrimaryShade = getHue({
		colorMode: 'light',
		type: 'text.primary'
	});
	const textSecondaryShade = getHue({
		colorMode: 'light',
		type: 'text.secondary'
	});

	return {
		'color': `${theme.colors.gray[textPrimaryShade]} !important`,
		'borderColor': `${theme.colors.transparent} !important`,
		'backgroundColor': `${theme.colors.transparent} !important`,
		'background': `${theme.colors.transparent} !important`,

		'& textarea::placeholder': {
			color: `${transparentize(theme.colors.gray[textSecondaryShade], amount.placeholder)} !important`
		}
	};
};
